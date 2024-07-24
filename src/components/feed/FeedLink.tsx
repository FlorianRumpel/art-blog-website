import Link from "next/link";

type Props = {
  name: string;
  htmlDescription: string;
  optionalImages?: string[] | null;
};

const LinkComponent: React.FC<Props> = ({name}) => {
  return (
    <Link
      href={`/details/${name.toLowerCase().replaceAll(" ", "-")}`}
      className="link-to-details"
    >
      &#62;&#62;
    </Link>
  );
};

export default LinkComponent;
