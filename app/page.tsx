"use client";

import { DndContext } from "@dnd-kit/core";
import { Twice } from "./Data/twice";
import StagingArea from "./StagingArea";
import Tier, { TierLabels } from "./Tier";
import "../public/styles/index.scss";

const Page = () => {
  return (
    <DndContext>
      <main>
        {TierLabels.map((TierLabel) => (
          <Tier key={TierLabel} label={TierLabel} />
        ))}
        <StagingArea rankableItems={Twice} />
      </main>
    </DndContext>
  );
};

export default Page;
