import DesginFilter from "@/components/DesginFilter";
import Imprint from "@/components/Imprint";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Persönlich",
};

function Personal() {
  return (
    <div>
      <DesginFilter filter="personal" />
      <Imprint />
    </div>
  );
}

export default Personal;
