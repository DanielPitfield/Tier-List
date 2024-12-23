"use client";

import styles from "../public/styles/Tier.module.scss";
import RankableItem, { RankableItemTemplate } from "./RankableItem";
import { useDroppable } from "@dnd-kit/core";

export const TierLabels = ["S", "A", "B", "C", "D"] as const;
export type TierLabel = (typeof TierLabels)[number];

interface TierProps {
  label: TierLabel;
  rankableItems: RankableItemTemplate[];
}

const Tier = (props: TierProps) => {
  const { setNodeRef } = useDroppable({
    id: props.label,
  });

  return (
    <section className={styles.wrapper}>
      <label className={styles.label} data-label={props.label}>
        {props.label}
      </label>

      <div ref={setNodeRef} className={styles.container}>
        {props.rankableItems.map((rankableItem) => (
          <RankableItem key={rankableItem.id} item={rankableItem} />
        ))}
      </div>
    </section>
  );
};

export default Tier;
