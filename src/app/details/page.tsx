import dynamic from "next/dynamic";

const DetailsClientComponent = dynamic(
  () => import("@/components/DetailsPageComponent"),
  {
    ssr: false,
  },
);

function Details() {
  return <DetailsClientComponent />;
}

export default Details;
