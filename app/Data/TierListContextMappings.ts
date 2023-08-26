import { RankableItemTemplate } from "../RankableItem";
import { Twice } from "./TwiceMembers";
import { F1Drivers } from "./F1Drivers";

export const tierListContexts = ["Twice Members", "F1 Drivers"] as const;
export type TierListContext = (typeof tierListContexts)[number];

type TierListContextMapping = {
  tierListContext: TierListContext;
  items: RankableItemTemplate[];
};

export const tierListContextMappings: TierListContextMapping[] = [
  { tierListContext: "Twice Members", items: Twice },
  { tierListContext: "F1 Drivers", items: F1Drivers },
];
