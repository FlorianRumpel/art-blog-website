import DesginFilter from "@/components/DesginFilter";
import Imprint from "@/components/Imprint";

import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Produktdesign",
};

function Page() {
  return (
    <div>
      <DesginFilter filter="product" />
      <Imprint />
    </div>
  );
}

export default Page;
