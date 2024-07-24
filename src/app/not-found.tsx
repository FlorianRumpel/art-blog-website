import Imprint from "@/components/Imprint";
import {Metadata} from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Nicht gefunden",
  };
}

function NotFound() {
  return (
    <div className="not-found-page">
      <p>Diese Seite wurde nicht gefunden</p>
      <Imprint />
    </div>
  );
}

export default NotFound;
