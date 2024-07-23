import DesginFilter from "@/components/DesginFilter";
import Imprint from "@/components/Imprint";
import {Metadata} from "next";

function Personal() {
  return (
    <div>
      <DesginFilter filter="home" />
      <Imprint />
    </div>
  );
}

export default Personal;
