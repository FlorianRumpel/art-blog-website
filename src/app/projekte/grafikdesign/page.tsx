import DesginFilter from "@/components/DesginFilter";
import Imprint from "@/components/Imprint";

import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Grafikdesign",
};

function Page() {
  return (
    <div>
      <DesginFilter filter="graphic" />
      <Imprint />
    </div>
  );
}

export default Page;
