"use client";

import styles from "../public/styles/Tier.module.scss";
import { useDroppable } from "@dnd-kit/core";
import { TierLabel } from "./Tier";

interface TierContainerProps {
  label: TierLabel;
}

const TierContainer = (props: TierContainerProps) => {
  const { setNodeRef } = useDroppable({
    id: props.label,
  });

  return <div ref={setNodeRef} className={styles.container}></div>;
};

export default TierContainer;
