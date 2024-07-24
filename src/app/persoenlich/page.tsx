import DesginFilter from "@/components/DesginFilter";
import Imprint from "@/components/Imprint";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Persönlich",
  description: "alle projekte die zu persönlich gehören",
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
