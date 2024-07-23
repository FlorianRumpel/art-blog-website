import {Metadata} from "next";
import dynamic from "next/dynamic";

const DetailsClientComponent = dynamic(
  () => import("@/components/DetailsPageComponent"),
  {
    ssr: false,
  },
);
export const metadata: Metadata = {
  title: "Details",
};
function Details() {
  return <DetailsClientComponent />;
}

export default Details;
