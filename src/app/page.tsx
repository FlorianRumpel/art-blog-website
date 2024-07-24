import DesginFilter from "@/components/DesginFilter";
import Imprint from "@/components/Imprint";
import {Metadata} from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    description: "Startseite mit spannenden Projekten",
  };
}

function Page() {
  return (
    <div>
      <DesginFilter filter="home" />
      <Imprint />
    </div>
  );
}

export default Page;
