import { RankableItemTemplate } from "../RankableItem";
import { StaticImageData } from "next/image";

import BeckyG from "../../public/Images/Juicers/beckyG.png";
import IsabelaMerced from "../../public/Images/Juicers/isabelaMerced.png";
import ArianaGrande from "../../public/Images/Juicers/arianaGrande.png";
import OliviaRodrigo from "../../public/Images/Juicers/oliviaRodrigo.png";
import { TwiceMembers } from "./TwiceMembers";

const JuicersImageObjects: { image: StaticImageData; alt: string }[] = [
  { image: BeckyG, alt: "Becky G" },
  { image: IsabelaMerced, alt: "Isabela Merced" },
  { image: ArianaGrande, alt: "Ariana Grande" },
  { image: OliviaRodrigo, alt: "Olivia Rodrigo" },
].concat(TwiceMembers);

export const Juicers: RankableItemTemplate[] = JuicersImageObjects.map((ImageObject, Index) => ({
  id: `${ImageObject.alt}_${Index + 1}`,
  ...ImageObject,
}));
