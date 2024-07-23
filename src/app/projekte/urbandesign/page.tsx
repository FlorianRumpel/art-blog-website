import DesginFilter from "@/components/DesginFilter";
import Imprint from "@/components/Imprint";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Urbandesign",
};

function Page() {
  return (
    <div>
      <DesginFilter filter="urban" />
      <Imprint />
    </div>
  );
}

export default Page;
