import ImageComponent from "@/components/ImageComponent";
import Imprint from "@/components/Imprint";
import {Data} from "@/globalstate";
import BackButton from "@/components/BackButton";
import {Metadata} from "next";
import {notFound} from "next/navigation";
export const metadata: Metadata = {
  title: "Details",
};

async function Details({params}: {params: {postName: string}}) {
  // const url = `http://localhost:3000/api/firebase/${params.postName}`;
  const url = `https://emelie-christina-trenkler.vercel.app/api/firebase/${params.postName}`;
  const res = await fetch(url);
  const resJson = await res.json();

  const data: Data = resJson.response;

  if (!data) {
    return notFound();
  }

  function setClassName() {
    if (!data.additionalImageUrls) return "";
    if (Object.keys(data.additionalImageUrls).length === 1) return "one-image";
    else return "two-images";
  }

  return (
    <>
      <div className="details">
        <BackButton />

        <p className="name">{data.name}</p>
        <div
          className="description"
          dangerouslySetInnerHTML={{__html: data.description}}
        />
        <div className={`image-container ${setClassName()}`}>
          {data.additionalImageUrls &&
            Object.keys(data.additionalImageUrls).length > 0 && (
              <>
                <ImageComponent src={data.additionalImageUrls[0]} />
                {Object.keys(data.additionalImageUrls).length > 1 && (
                  <ImageComponent src={data.additionalImageUrls[1]} />
                )}
              </>
            )}
        </div>
      </div>
      <Imprint />
    </>
  );
}
export async function generateStaticParams() {
  // const res = await fetch("http://localhost:3000/api/firebase");
  const res = await fetch(
    "https://emelie-christina-trenkler.vercel.app/api/firebase",
  );
  const resJson = await res.json();
  const posts: Data[] = resJson.response;
  return posts.map((post: Data) => post.id);
}
export default Details;
