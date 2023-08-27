import { RankableItemTemplate } from "../RankableItem";
import { StaticImageData } from "next/image";

import Jennie from "../../public/Images/Blackpink Members/jennie.png";
import Jisoo from "../../public/Images/Blackpink Members/jisoo.png";
import Lisa from "../../public/Images/Blackpink Members/lisa.png";
import Rose from "../../public/Images/Blackpink Members/rose.png";

const BlackpinkMembersImageObjects: { image: StaticImageData; alt: string }[] = [
  { image: Jennie, alt: "Jennie" },
  { image: Jisoo, alt: "Jisoo" },
  { image: Lisa, alt: "Lisa" },
  { image: Rose, alt: "Rose" },
];

export const BlackpinkMembers: RankableItemTemplate[] = BlackpinkMembersImageObjects.map((ImageObject, Index) => ({
  id: `${ImageObject.alt}_${Index + 1}`,
  ...ImageObject,
}));
