"use client";

import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), {ssr: false});
const LoadingIcons = dynamic(
  () => import("react-loading-icons").then((mod) => mod.ThreeDots),
  {ssr: false},
);

import "react-quill/dist/quill.snow.css";
import {useState, useRef} from "react";
import {storage, db} from "../../firebaseconfig";
import {ref as storageRef, getDownloadURL, uploadBytes} from "firebase/storage";
import {ref, set} from "firebase/database";
import ActiveFeeds from "@/components/ActiveFeeds";
import {useRouter} from "next/navigation";

function Upload() {
  const [value, setValue] = useState<string>("");
  const [mainImage, setMainImage] = useState<null | any>();
  const [additionalImages, setAdditionalImages] = useState<any>([]);
  const [name, setName] = useState<string>("");
  const [selectValue, setSelectValue] = useState<string>("disabled");
  const [password, setPassword] = useState<string>("");
  const [showEditor, setShowEditor] = useState<boolean>(false);
  const [showSpinner, setShowSpinner] = useState<boolean>(false);

  const input1 = useRef<HTMLInputElement | null>(null);
  const uploadBtnRef = useRef<HTMLButtonElement | null>(null);

  const router = useRouter();

  const buttonDisabled =
    value.length < 12 || !mainImage || !name || selectValue === "disabled";

  const handleMainImageChange = (e: any) => {
    setMainImage(e.target.files[0]);
  };
  const handleAdditionalImagesChange = (e: any) => {
    const files = Array.from(e.target.files);
    const filesArray = [files[0], files[1]];
    setAdditionalImages(filesArray);
  };

  const handleUpload = async () => {
    if (uploadBtnRef.current) {
      uploadBtnRef.current.disabled = true;
    }
    if (!mainImage) return;
    const id = crypto.randomUUID();
    const imagesNames: string[] = [];

    // Hauptbild hochladen
    const formattedMainImageName =
      mainImage.name.toLowerCase().replace(" ", "") + "+" + id;

    const mainImageRef = storageRef(
      storage,
      `images/${formattedMainImageName}`,
    );
    imagesNames.push(formattedMainImageName);
    await uploadBytes(mainImageRef, mainImage);

    const mainImageUrl = await getDownloadURL(mainImageRef);

    // Zusätzliche Bilder hochladen
    const additionalImageUrls = [];

    for (const image of additionalImages) {
      if (!image) break;

      const imageRef = storageRef(
        storage,
        `images/${image.name.toLowerCase().replace(" ", "") + "+" + id}`,
      );
      await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(imageRef);
      additionalImageUrls.push(imageUrl);
      imagesNames.push(image.name.toLowerCase().replace(" ", "") + "+" + id);
    }

    await set(
      ref(db, `posts/${name.toLowerCase().replace(" ", "") + "+" + id}`),
      {
        id: id,
        name: name,
        description: value,
        mainImageUrl,
        additionalImageUrls: additionalImageUrls,
        categorie: selectValue,
        allImageNames: imagesNames,
      },
    );

    setMainImage(null);
    setAdditionalImages([]);
    setName("");
    setValue("");
    setSelectValue("disabled");

    if (!input1.current) return;
    input1.current.value = "";
  };
  function checkPassword() {
    if (password === process.env.VITE_PASSWORD) {
      setShowEditor(true);
    } else {
      router.replace("/");
    }
  }

  if (showEditor == false)
    return (
      <div className="verification-container">
        <label htmlFor="password">Gib dein Passwort ein</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name=""
          id="password"
        />
        <button onClick={() => checkPassword()} type="button">
          Prüfen
        </button>
      </div>
    );
  if (showEditor == true)
    return (
      <div className="editor">
        <div className="image-inputs">
          <div>
            <label htmlFor="main-image">Haupt Bild wählen</label>
            <input
              accept="image/*"
              name="main-image"
              id="main-image"
              type="file"
              onChange={handleMainImageChange}
              ref={input1}
            />
          </div>

          <div>
            <label htmlFor="more-images">Bis zu 2 weitere Bilder</label>
            <input
              onClick={(e: any) => (e.target.value = null)}
              accept="image/*"
              name="more-images"
              id="more-images"
              multiple
              type="file"
              onChange={handleAdditionalImagesChange}
            />
          </div>
        </div>

        <div className="feed-name">
          <label htmlFor="feed-name">Feed Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="feed-name"
            id="feed-name"
            placeholder="Ein Name..."
          />
        </div>

        <select
          onChange={(e) => setSelectValue(e.target.value)}
          name="select-item"
          value={selectValue}
        >
          <option disabled value="disabled">
            Kategorie wählen
          </option>
          <option value="graphic">Grafikdesign</option>
          <option value="urban">Urbandesign</option>
          <option value="material">Materialdesgin</option>
          <option value="photo">Fotografie</option>
          <option value="art">Kunst</option>
          <option value="product">Productdesign</option>
          <option value="personal">Persönlich</option>
          <option value="home">Startseite</option>
        </select>

        <button
          ref={uploadBtnRef}
          disabled={buttonDisabled}
          onClick={async () => {
            setShowSpinner(true);

            await handleUpload();
            setShowSpinner(false);
          }}
          className="submit-button"
        >
          Senden
        </button>

        <ReactQuill
          className="text-editor"
          theme="snow"
          value={value}
          onChange={setValue}
        />

        <ActiveFeeds />

        {showSpinner && (
          <LoadingIcons className="activity-indicator" fill="black" />
        )}
      </div>
    );
}

export default Upload;
