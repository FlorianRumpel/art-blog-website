// src/app/testpage/page.tsx
import ImageComponent from "@/components/ImageComponent";
import LinkComponent from "@/components/feed/FeedLink";

type Props = {
  name: string;
  mainImg: string;
  optionalImages?: string[] | null;
  htmlDescription: string;
  id: string;
  allImageNames: string[];
};

export default async function Feed({
  name,
  mainImg,
  optionalImages,
  htmlDescription,
}: Props) {
  return (
    <div className="feed">
      <ImageComponent src={mainImg} />
      <div className="button">
        <p>{name}</p>
        <LinkComponent
          name={name}
          htmlDescription={htmlDescription}
          optionalImages={optionalImages}
        />
      </div>
    </div>
  );
}
