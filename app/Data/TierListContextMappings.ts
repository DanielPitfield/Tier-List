import { RankableItemTemplate } from "../RankableItem";
import { Twice } from "./TwiceMembers";
import { F1Drivers } from "./F1Drivers";

export const tierListContexts = ["Twice", "F1"] as const;
export type TierListContext = (typeof tierListContexts)[number];

type TierListContextMapping = {
  tierListContext: TierListContext;
  items: RankableItemTemplate[];
};

export const tierListContextMappings: TierListContextMapping[] = [
  { tierListContext: "Twice", items: Twice },
  { tierListContext: "F1", items: F1Drivers },
];
