import { RankableItemTemplate } from "../RankableItem";
import { StaticImageData } from "next/image";

import Jihyo from "../../public/Images/Twice Members/jihyo.png";
import Momo from "../../public/Images/Twice Members/momo.png";
import Sana from "../../public/Images/Twice Members/sana.png";
import Nayeon from "../../public/Images/Twice Members/nayeon.png";
import Tzuyu from "../../public/Images/Twice Members/tzuyu.png";
import Mina from "../../public/Images/Twice Members/mina.png";
import Chaeyoung from "../../public/Images/Twice Members/chaeyoung.png";
import Jeongyeon from "../../public/Images/Twice Members/jeongyeon.png";
import Dahyun from "../../public/Images/Twice Members/dahyun.png";

const TwiceMembersImageObjects: { image: StaticImageData; alt: string }[] = [
  { image: Jihyo, alt: "Jihyo" },
  { image: Momo, alt: "Momo" },
  { image: Sana, alt: "Sana" },
  { image: Nayeon, alt: "Nayeon" },
  { image: Tzuyu, alt: "Tzuyu" },
  { image: Mina, alt: "Mina" },
  { image: Chaeyoung, alt: "Chaeyoung" },
  { image: Jeongyeon, alt: "Jeongyeon" },
  { image: Dahyun, alt: "Dahyun" },
];

export const TwiceMembers: RankableItemTemplate[] = TwiceMembersImageObjects.map((ImageObject, Index) => ({
  id: `${ImageObject.alt}_${Index + 1}`,
  ...ImageObject,
}));
