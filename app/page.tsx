"use client";

import { DndContext, DragEndEvent } from "@dnd-kit/core";
import StagingArea from "./StagingArea";
import Tier, { TierLabel, TierLabels } from "./Tier";
import "../public/styles/index.scss";
import { RankableItemTemplate } from "./RankableItem";
import { useCallback, useEffect, useRef, useState } from "react";
import { Twice } from "./Data/TwiceMembers";
import { TierListContext, tierListContextMappings } from "./Data/TierListContextMappings";
import { Header } from "./Header";
import { toPng } from "html-to-image";

export type TierTemplate = { label: TierLabel; items: RankableItemTemplate[] };

const Page = () => {
  // Reference to the element that is downloaded as an image
  const ref = useRef<HTMLDivElement>(null);
  // Each tier (starting with no items)
  const initialTiers: TierTemplate[] = TierLabels.map((TierLabel) => ({ label: TierLabel, items: [] }));

  const [selectedTierListContext, setSelectedTierListContext] = useState<TierListContext>("Twice Members");
  const [tiers, SetTiers] = useState<TierTemplate[]>(initialTiers);
  const [stagingAreaItems, SetStagingAreaItems] = useState<RankableItemTemplate[]>(Twice);

  useEffect(() => {
    reset();
  }, [selectedTierListContext]);

  // Move all items back to the staging area
  function reset() {
    SetTiers(initialTiers);
    SetStagingAreaItems(
      tierListContextMappings.find((x) => x.tierListContext === selectedTierListContext)?.items ?? Twice
    );
  }

  // Download an image of the tier list
  const download = useCallback(async () => {
    if (ref.current === null) {
      return;
    }

    const dataUrl = await toPng(ref.current, { cacheBust: true });

    if (!dataUrl) {
      return;
    }

    const link = document.createElement("a");
    link.href = dataUrl;
    // The file name of the downloaded image
    link.download = `${selectedTierListContext.replaceAll(" ", "-").toLowerCase()}-tier-list.png`;
    link.click();
  }, [ref, selectedTierListContext]);

  // What happens after dragging a rankable item?
  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!active || !over || !active.data.current) {
      return;
    }

    const draggedItem = active.data.current.item as RankableItemTemplate;
    const draggedItemTier = tiers.find((tier) => tier.items.some((item) => item.id === draggedItem.id))?.label;

    // Dragged within the staging area (not dragged to a tier)
    if (!draggedItemTier && over.id === "Staging Area") {
      return;
    }

    // Dragged to the same tier
    if (draggedItemTier === over.id) {
      return;
    }

    // From staging area to tier
    if (!draggedItemTier) {
      // Remove item from staging area
      SetStagingAreaItems(stagingAreaItems.filter((item) => item.id !== draggedItem.id));

      // Add to tier
      const newTiers = tiers.slice();
      newTiers.find((tier) => tier.label === over.id)?.items.push(draggedItem);
      SetTiers(newTiers);

      return;
    }

    // From tier to staging area
    if (over.id === "Staging Area") {
      // Remove item from tier
      const newTiers = tiers.slice();
      let sourceTier = newTiers.find((tier) => tier.label === draggedItemTier);

      if (!sourceTier) {
        return;
      }

      sourceTier.items = sourceTier.items.filter((item) => item.id !== draggedItem.id);
      SetTiers(newTiers);

      // Add to staging area
      const newStagingAreaItems = stagingAreaItems.slice();
      newStagingAreaItems.push(draggedItem);
      SetStagingAreaItems(newStagingAreaItems);

      return;
    }

    // Otherwise, from a tier to another tier, so remove item from tier
    const newTiers = tiers.slice();
    let sourceTier = newTiers.find((tier) => tier.label === draggedItemTier);

    if (!sourceTier) {
      return;
    }

    sourceTier.items = sourceTier.items.filter((item) => item.id !== draggedItem.id);

    // Add to other tier
    newTiers.find((tier) => tier.label === over.id)?.items.push(draggedItem);
    SetTiers(newTiers);
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <main>
        <Header
          reset={reset}
          download={download}
          onChangeTierListContext={setSelectedTierListContext}
          selectedTierListContext={selectedTierListContext}
        />

        <div ref={ref}>
          {TierLabels.map((TierLabel) => (
            <Tier
              key={TierLabel}
              label={TierLabel}
              rankableItems={tiers.find((tier) => tier.label === TierLabel)?.items ?? []}
            />
          ))}
        </div>

        <StagingArea rankableItems={stagingAreaItems} />
      </main>
    </DndContext>
  );
};

export default Page;
