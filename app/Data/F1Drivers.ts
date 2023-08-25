import { RankableItemTemplate } from "../RankableItem";
import { StaticImageData } from "next/image";

import MaxVerstappen from "../../public/Images/F1 Drivers/maxVerstappen.png";
import LewisHamilton from "../../public/Images/F1 Drivers/lewisHamilton.png";

const F1DriversImageObjects: { image: StaticImageData; alt: string }[] = [
  { image: MaxVerstappen, alt: "Max Verstappen" },
  { image: LewisHamilton, alt: "Lewis Hamilton" },
];

export const F1Drivers: RankableItemTemplate[] = F1DriversImageObjects.map((ImageObject, Index) => ({
  id: Index + 1,
  ...ImageObject,
  tier: null,
}));
