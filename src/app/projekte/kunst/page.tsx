import DesginFilter from "@/components/DesginFilter";
import Imprint from "@/components/Imprint";

import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Kunst",
};

function Page() {
  return (
    <div>
      <DesginFilter filter="art" />
      <Imprint />
    </div>
  );
}

export default Page;
