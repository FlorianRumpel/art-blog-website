// src/components/LinkComponent.tsx
"use client"; // Dies macht die Komponente zu einer Client-Komponente

import Link from "next/link";
import {GLOBALSTATE} from "../../globalstate";

type Props = {
  name: string;
  htmlDescription: string;
  optionalImages?: string[] | null;
};

const LinkComponent: React.FC<Props> = ({
  name,
  htmlDescription,
  optionalImages,
}) => {
  function handleLinkPress() {
    window.scrollTo(0, 0);
    GLOBALSTATE.htmlDescription = htmlDescription;
    GLOBALSTATE.name = name;
    GLOBALSTATE.allImageNames = [];

    if (optionalImages) {
      GLOBALSTATE.optionalImages = optionalImages;
    } else {
      GLOBALSTATE.optionalImages = [];
    }
  }

  return (
    <Link href="/details" onClick={handleLinkPress} className="link-to-details">
      &#62;&#62;
    </Link>
  );
};

export default LinkComponent;
