import {fetchBlogData} from "../firebaseconfig";
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
    | "personal";
};

async function DesginFilter(props: Props) {
  const {filter} = props;
  const unfilteredData: Data[] = await fetchBlogData();

  const data = unfilteredData.filter((item) => item.categorie == filter);

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
