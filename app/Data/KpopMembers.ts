import { RankableItemTemplate } from "../RankableItem";
import { StaticImageData } from "next/image";

import Yuna from "../../public/Images/Kpop Members/yuna.png";
import Seolhyun from "../../public/Images/Kpop Members/seolhyun.png";
import { BlackpinkMembers } from "./BlackpinkMembers";
import { TwiceMembers } from "./TwiceMembers";

const KpopMembersImageObjects: { image: StaticImageData; alt: string }[] = [
  { image: Yuna, alt: "Yuna" },
  { image: Seolhyun, alt: "Seolhyun" },
].concat(BlackpinkMembers, TwiceMembers);

export const KpopMembers: RankableItemTemplate[] = KpopMembersImageObjects.map((ImageObject, Index) => ({
  id: Index + 1,
  ...ImageObject,
}));
