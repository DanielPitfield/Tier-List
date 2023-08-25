"use client";

import { DndContext, DragEndEvent } from "@dnd-kit/core";
import StagingArea from "./StagingArea";
import Tier, { TierLabel, TierLabels } from "./Tier";
import "../public/styles/index.scss";
import { RankableItemTemplate } from "./RankableItem";
import { useState } from "react";
import { Twice } from "./Data/twice";

export type TierTemplate = { label: TierLabel | "Staging Area"; items: RankableItemTemplate[] };

const Page = () => {
  // Each tier (starting with no items)
  const initialTiers: TierTemplate[] = TierLabels.map((TierLabel) => ({ label: TierLabel, items: [] }));

  const [tiers, SetTiers] = useState<TierTemplate[]>(initialTiers);
  const [stagingAreaItems, SetStagingAreaItems] = useState<RankableItemTemplate[]>(Twice);

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!active || !over || !active.data.current) {
      return;
    }

    const draggedItem = active.data.current.item as RankableItemTemplate;

    // Dragged to the same group (not moved to another group)
    if (draggedItem.tier === over.id) {
      return;
    }

    // From staging area to tier
    if (!draggedItem.tier) {
      // Remove item from staging area
      SetStagingAreaItems(stagingAreaItems.filter((item) => item.id !== draggedItem.id));

      // Add to tier
      const newTiers = tiers.slice();
      newTiers.find((tier) => tier.label === over.id)?.items.push({ ...draggedItem, tier: over.id as TierLabel });
      SetTiers(newTiers);

      return;
    }

    // From tier to staging area
    if (over.id === "Staging Area") {
      // Remove item from tier
      const newTiers = tiers.slice();
      let sourceTier = newTiers.find((tier) => tier.label === draggedItem.tier);

      if (sourceTier === undefined) {
        return;
      }

      sourceTier.items = sourceTier.items.filter((item) => item.id !== draggedItem.id);
      SetTiers(newTiers);

      // Add to staging area
      const newStagingAreaItems = stagingAreaItems.slice();
      newStagingAreaItems.push({ ...draggedItem, tier: null });
      SetStagingAreaItems(newStagingAreaItems);

      return;
    }

    // Otherwise, from a tier to another tier, so remove item from tier
    const newTiers = tiers.slice();
    let sourceTier = newTiers.find((tier) => tier.label === draggedItem.tier);

    if (sourceTier === undefined) {
      return;
    }

    sourceTier.items = sourceTier.items.filter((item) => item.id !== draggedItem.id);

    // Add to other tier
    newTiers.find((tier) => tier.label === over.id)?.items.push({ ...draggedItem, tier: over.id as TierLabel });
    SetTiers(newTiers);
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <main>
        {TierLabels.map((TierLabel) => (
          <Tier
            key={TierLabel}
            label={TierLabel}
            rankableItems={tiers.find((tier) => tier.label === TierLabel)?.items ?? []}
          />
        ))}
        <StagingArea rankableItems={stagingAreaItems} />
      </main>
    </DndContext>
  );
};

export default Page;
