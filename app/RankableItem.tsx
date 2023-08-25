import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import Image, { StaticImageData } from "next/image";

export type RankableItemTemplate = {
  id: number;
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
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <Image src={props.item.image} alt={props.item.alt} title={props.item.alt} width={120} height={120} />
    </div>
  );
};

export default RankableItem;
