"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";

type Props = {
  to:
    | "materialdesign"
    | "urbandesign"
    | "grafikdesign"
    | "kunst"
    | "fotografie"
    | "produktdesign";
  closeNav?: Function;
};

function CustomLink(props: Props) {
  const {to, closeNav} = props;
  const location = usePathname();

  return (
    <Link
      onClick={() => closeNav && closeNav((prev: any) => !prev)}
      className={`nav-link ${location.includes(to) && "active"}`}
      href={`/projekte/${to}`}
    >
      {to.toUpperCase()}
    </Link>
  );
}

export default CustomLink;
