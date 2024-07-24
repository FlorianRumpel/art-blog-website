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
    </div>
  );
}

export default NotFound;
