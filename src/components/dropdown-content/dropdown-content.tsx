import { ChangeEvent, FC } from "react";
import { Input } from "../input/input";
import { Tabs } from "../tabs/tabs";
import { VirtualList } from "../virtual-list/virtual-list";
import { FuseResult } from "fuse.js";

interface DropdownContentProps {
  searchQuery: string;
  handleSearchQueryChange: (e: ChangeEvent<HTMLInputElement>) => void;
  activeTab: number;
  setActiveTab: (index: number) => void;
  searchResults: FuseResult<string>[];
  selectedCoins: string[];
  coins: string[];
}

export const DropdownContent: FC<DropdownContentProps> = ({
  searchQuery,
  handleSearchQueryChange,
  activeTab,
  setActiveTab,
  searchResults,
  selectedCoins,
  coins,
}) => {
  return (
    <>
      <Input value={searchQuery} onChange={handleSearchQueryChange} />
      <Tabs
        activeTabIndex={activeTab}
        setActiveTabIndex={setActiveTab}
        tabs={[
          {
            title: "favorites",
            render: () => (
              <VirtualList
                items={searchQuery ? searchResults : selectedCoins}
              />
            ),
          },
          {
            title: "all coins",
            render: () => (
              <VirtualList items={searchQuery ? searchResults : coins} />
            ),
          },
        ]}
      />
    </>
  );
};
