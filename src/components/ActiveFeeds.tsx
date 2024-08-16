import {useEffect, useState} from "react";
import {ref, onValue, remove} from "firebase/database";
import {ref as storageRef, deleteObject} from "firebase/storage";
import {db, storage} from "../firebaseconfig";

import {MdDelete} from "@react-icons/all-files/md/MdDelete";

type Data = {
  id: string;
  name: string;
  description: string;
  mainImageUrl: string;
  additionalImageUrls: string[];
  categorie: string;
  allImageNames: string[];
};

const dataBaseRef = ref(db, "posts");

function ActiveFeeds() {
  const [data, setData] = useState<Data[]>([]);
  const fetchData = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/firebase`);

    const resJson = await res.json();
    setData(resJson.response);
  };

  useEffect(() => {
    fetchData();
  });

  async function deleteItem(id: string, name: string, imageNames: string[]) {
    const fullItemName = `${name.toLowerCase().replaceAll(" ", "-")}`;
    const itemRef = ref(db, `/posts/${fullItemName}`);
    remove(itemRef).catch((error) => {
      console.error("Fehler beim Löschen der Daten:", error);
    });

    const uniq = [...new Set(imageNames)];

    uniq.forEach((name) => {
      const imageRef = storageRef(storage, `images/${name}`);
      deleteObject(imageRef)
        .then(() => {
          //
        })
        .catch((error) => {
          console.error("Fehler beim Löschen des Bildes:", error);
        });
    });
    await fetchData();
  }

  return (
    <div className="active-feeds">
      {data.map((item: Data) => (
        <div key={item.id} className="item">
          <p className="name">{item.name}</p>
          <button
            onClick={() => deleteItem(item.id, item.name, item.allImageNames)}
            className="delete-button"
          >
            <MdDelete className="icon" color="rgb(214, 5, 5)" size={30} />
          </button>
        </div>
      ))}
    </div>
  );
}

export default ActiveFeeds;
