import React from "react";
import HeaderButton from "./HeaderButton";
import { FiRefreshCw } from "react-icons/fi";
import { FiDownload } from "react-icons/fi";
import { TierListContext, tierListContextMappings } from "./Data/TierListContextMappings";

interface HeaderProps {
  reset: () => void;
  download: () => void;
  onChangeTierListContext: (tierListContext: TierListContext) => void;
  selectedTierListContext: TierListContext;
}

export const Header = (props: HeaderProps) => {
  return (
    <header>
      <HeaderButton text={"Reset"} icon={FiRefreshCw} onClick={props.reset} />

      <div className="title">
        <h1>
          <select
            onChange={(e) => props.onChangeTierListContext(e.target.value as TierListContext)}
            value={props.selectedTierListContext}
          >
            {tierListContextMappings.map((x) => (
              <option key={x.tierListContext} value={x.tierListContext}>
                {x.tierListContext}
              </option>
            ))}
          </select>
          Tier List
        </h1>
      </div>

      <HeaderButton text={"Download"} icon={FiDownload} onClick={props.download} />
    </header>
  );
};
