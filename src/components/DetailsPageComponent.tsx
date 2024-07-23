"use client";
import {useState} from "react";
import {useSnapshot} from "valtio/react";
import {GLOBALSTATE} from "../globalstate";
import {IoMdArrowBack} from "@react-icons/all-files/io/IoMdArrowBack";
import {useSessionStorage} from "@uidotdev/usehooks";
import ImageComponent from "@/components/ImageComponent";
import Imprint from "@/components/Imprint";

function Details() {
  const snap = useSnapshot(GLOBALSTATE);

  const [data, setData] = useSessionStorage<any>("globalstate", snap);
  const [documentWidth, setWidth] = useState<number>(document.body.clientWidth);

  window.onresize = () => {
    setWidth(document.body.clientWidth);
  };
  const gridCollums = (): string => {
    if (data.optionalImages.length === 1 || documentWidth < 600) {
      return "1fr";
    } else {
      return "1fr 1fr";
    }
  };

  if (GLOBALSTATE.name !== "") {
    setData(snap);
  }

  return (
    <>
      <div className="details">
        <button className="back-button" onClick={() => history.back()}>
          <IoMdArrowBack />
          <p>Back</p>
        </button>

        <p className="name">{data.name}</p>
        <div
          className="description"
          dangerouslySetInnerHTML={{__html: data.htmlDescription}}
        />
        <div
          className="image-container"
          style={{
            gridTemplateColumns: gridCollums(),
          }}
        >
          {data.optionalImages.length === 1 ||
            (data.optionalImages.length === 2 && (
              <ImageComponent src={data.optionalImages[0]} />
            ))}

          {data.optionalImages.length === 2 && (
            <ImageComponent src={data.optionalImages[1]} />
          )}
        </div>
      </div>
      <Imprint />
    </>
  );
}

export default Details;
