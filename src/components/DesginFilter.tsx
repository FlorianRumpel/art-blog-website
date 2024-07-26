import Feed from "./feed/Feed";
import {Data} from "../globalstate";

type Props = {
  filter:
    | "graphic"
    | "urban"
    | "material"
    | "art"
    | "photo"
    | "product"
    | "home"
    | "personal"
    | "projects";
};

async function DesginFilter(props: Props) {
  const {filter} = props;
  const res = await fetch(
    `${process.env.BASE_URL}/api/firebase?timestamp=${new Date().getTime()}`,
    {
      cache: "no-store",
    },
  );

  const resJson = await res.json();
  const unfilteredData: Data[] = resJson.response;

  let data;
  if (props.filter !== "projects") {
    data = unfilteredData.filter((item) => item.categorie == filter);
  } else {
    data = unfilteredData.filter(
      (item) => item.categorie != "home" && item.categorie != "personal",
    );
  }

  return (
    <div>
      {data.length === 0 && (
        <p className="no-project-text">
          Hier befinden sich noch keine projekte
        </p>
      )}
      {data.map((item) => (
        <Feed
          allImageNames={item.allImageNames}
          key={item.id}
          id={item.id}
          htmlDescription={item.description}
          mainImg={item.mainImageUrl}
          name={item.name}
          optionalImages={item.additionalImageUrls}
        />
      ))}
    </div>
  );
}

export default DesginFilter;
