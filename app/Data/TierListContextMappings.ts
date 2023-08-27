import { RankableItemTemplate } from "../RankableItem";
import { Twice } from "./TwiceMembers";
import { Blackpink } from "./BlackpinkMembers";
import { F1Drivers } from "./F1Drivers";

export const tierListContexts = ["Twice Members", "Blackpink Members", "F1 Drivers"] as const;
export type TierListContext = (typeof tierListContexts)[number];

type TierListContextMapping = {
  tierListContext: TierListContext;
  items: RankableItemTemplate[];
};

export const tierListContextMappings: TierListContextMapping[] = [
  { tierListContext: "Twice Members", items: Twice },
  { tierListContext: "Blackpink Members", items: Blackpink },
  { tierListContext: "F1 Drivers", items: F1Drivers },
];
