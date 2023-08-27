import { RankableItemTemplate } from "../RankableItem";
import { StaticImageData } from "next/image";

import Jihyo from "../../public/Images/Twice Members/jihyo.jpg";
import Momo from "../../public/Images/Twice Members/momo.jpg";
import Sana from "../../public/Images/Twice Members/sana.jpg";
import Nayeon from "../../public/Images/Twice Members/nayeon.jpg";
import Tzuyu from "../../public/Images/Twice Members/tzuyu.jpg";
import Mina from "../../public/Images/Twice Members/mina.jpg";
import Chaeyoung from "../../public/Images/Twice Members/chaeyoung.jpg";
import Jeongyeon from "../../public/Images/Twice Members/jeongyeon.jpg";
import Dahyun from "../../public/Images/Twice Members/dahyun.jpg";

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
