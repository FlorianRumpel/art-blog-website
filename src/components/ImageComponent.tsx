import Image from "next/image";

type Props = {
  src: string;
};

function ImageComponent(props: Props) {
  const {src} = props;

  return (
    <div className="image-component">
      <Image
        width={500}
        height={500}
        alt=""
        loading="lazy"
        src={src}
        sizes="100vw"
        style={{width: "100%", height: "auto"}}
      />
    </div>
  );
}

export default ImageComponent;
