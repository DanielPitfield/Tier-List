"use client";

import styles from "../public/styles/StagingArea.module.scss";
import { useDroppable } from "@dnd-kit/core";
import RankableItem, { RankableItemTemplate } from "./RankableItem";

interface StagingAreaProps {
  rankableItems: RankableItemTemplate[];
}

const StagingArea = (props: StagingAreaProps) => {
  const { setNodeRef } = useDroppable({
    id: "Staging Area",
  });

  console.log(props.rankableItems);

  return (
    <div ref={setNodeRef} className={styles.wrapper}>
      {props.rankableItems.map((rankableItem) => (
        <RankableItem key={rankableItem.id} item={rankableItem} />
      ))}
    </div>
  );
};

export default StagingArea;
