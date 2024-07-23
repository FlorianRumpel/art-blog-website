type Props = {
  src: string;
};

function ImageComponent(props: Props) {
  const {src} = props;

  return (
    <div className="ImageComponent">
      <img loading="lazy" src={src} width={"auto"} height={"auto"} />
    </div>
  );
}

export default ImageComponent;
