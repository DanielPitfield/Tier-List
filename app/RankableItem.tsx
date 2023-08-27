import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import Image, { StaticImageData } from "next/image";

export type RankableItemTemplate = {
  id: string;
  image: StaticImageData;
  alt: string;
};

interface RankableItemProps {
  item: RankableItemTemplate;
}

const RankableItem = (props: RankableItemProps) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.item.id,
    data: {
      item: props.item,
    },
  });

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <Image
      // Draggable props
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      // Image attributes
      src={props.item.image}
      alt={props.item.alt}
      title={props.item.alt}
      width={120}
      height={120}
    />
  );
};

export default RankableItem;
