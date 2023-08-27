import { RankableItemTemplate } from "../RankableItem";
import { Juicers } from "./Juicers";
import { TwiceMembers } from "./TwiceMembers";
import { BlackpinkMembers } from "./BlackpinkMembers";
import { KpopMembers } from "./KpopMembers";
import { F1Drivers } from "./F1Drivers";

export const tierListContexts = [
  "Juicers",
  "Twice Members",
  "Blackpink Members",
  "Kpop Members",
  "F1 Drivers",
] as const;
export type TierListContext = (typeof tierListContexts)[number];

type TierListContextMapping = {
  tierListContext: TierListContext;
  items: RankableItemTemplate[];
};

export const tierListContextMappings: TierListContextMapping[] = [
  { tierListContext: "Juicers", items: Juicers },
  { tierListContext: "Twice Members", items: TwiceMembers },
  { tierListContext: "Blackpink Members", items: BlackpinkMembers },
  { tierListContext: "Kpop Members", items: KpopMembers },
  { tierListContext: "F1 Drivers", items: F1Drivers },
];
