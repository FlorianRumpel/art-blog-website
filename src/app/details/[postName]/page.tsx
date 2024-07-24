import ImageComponent from "@/components/ImageComponent";
import Imprint from "@/components/Imprint";
import {Data} from "@/globalstate";
import BackButton from "@/components/BackButton";
import {Metadata} from "next";
import {notFound} from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: {postName: string};
}): Promise<Metadata> {
  const url = `${process.env.BASE_URL}/api/firebase/${params.postName}`;
  const res = await fetch(url);
  const resJson = await res.json();
  const data: Data = resJson.response;
  const cleanDescription = data.description.replaceAll(/(<([^>]+)>)/gi, "");
  return {
    title: `Details - ${params.postName}`,
    description: cleanDescription,
    openGraph: {
      images: {
        url: data.mainImageUrl,
      },
    },
  };
}
async function Details({params}: {params: {postName: string}}) {
  const url = `${process.env.BASE_URL}/api/firebase/${params.postName}`;
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
  const res = await fetch(`${process.env.BASE_URL}/api/firebase`);
  const resJson = await res.json();
  const posts: Data[] = resJson.response;
  return posts.map((post: Data) => post.id);
}
export default Details;
