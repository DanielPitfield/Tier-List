import { RankableItemTemplate } from "../RankableItem";
import { Twice } from "./twice";

export const tierListContexts = ["Twice" , "F1"] as const;
export type TierListContext = typeof tierListContexts[number] ;

type TierListContextMapping = {
  tierListContext: TierListContext;
  items: RankableItemTemplate[];
};

export const tierListContextMappings: TierListContextMapping[] = [
  { tierListContext: "Twice", items: Twice },
  // TODO: F1 Drivers!
  { tierListContext: "F1", items: Twice },
];