import DesginFilter from "@/components/DesginFilter";
import Imprint from "@/components/Imprint";

import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Materialdesign",
};

function Page() {
  return (
    <div>
      <DesginFilter filter="material" />
      <Imprint />
    </div>
  );
}

export default Page;
