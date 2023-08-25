import { RankableItemTemplate } from "../RankableItem";
import { StaticImageData } from "next/image";

import Jihyo from "../../public/Images/Twice/jihyo.png";
import Momo from "../../public/Images/Twice/momo.png";
import Sana from "../../public/Images/Twice/sana.png";
import Nayeon from "../../public/Images/Twice/nayeon.png";
import Tzuyu from "../../public/Images/Twice/tzuyu.png";
import Mina from "../../public/Images/Twice/mina.png";
import Chaeyoung from "../../public/Images/Twice/chaeyoung.png";
import Jeongyeon from "../../public/Images/Twice/jeongyeon.png";
import Dahyun from "../../public/Images/Twice/dahyun.png";

const TwiceImageObjects: { image: StaticImageData; alt: string }[] = [
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

export const Twice: RankableItemTemplate[] = TwiceImageObjects.map((ImageObject, Index) => ({
  id: Index + 1,
  ...ImageObject,
  tier: null,
}));
