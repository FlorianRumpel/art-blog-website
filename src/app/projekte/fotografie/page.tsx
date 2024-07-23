import DesginFilter from "@/components/DesginFilter";
import Imprint from "@/components/Imprint";

import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Fotografie",
};

function Page() {
  return (
    <div>
      <DesginFilter filter="photo" />
      <Imprint />
    </div>
  );
}

export default Page;
