import Feed from "@/components/feed/Feed";
import {Data} from "../../globalstate";
import {fetchBlogData} from "@/firebaseconfig";

async function Projects() {
  const unfilteredData: Data[] = await fetchBlogData();
  const data = unfilteredData.filter(
    (item) => item.categorie !== "home" && item.categorie !== "personal",
  );
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

export default Projects;
