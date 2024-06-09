import Fuse from "fuse.js";
import { ChangeEvent, useEffect, useMemo, useState } from "react";

import { getCoins } from "../api/get-coins";
import { Dropdown } from "./dropdown/dropdown";
import { Tabs } from "./tabs/tabs";
import { VirtualList } from "./virtual-list/virtual-list";
import { Input } from "./input/input";
import { parseStorage } from "../lib/parse-storage";
import { IconName, StorageKey } from "../constants/constants";
import { Button } from "./button/button";
import { Icon } from "./icon/icon";

import "../styles/App.css";

function App() {
  const [coins, setCoins] = useState<string[]>([]);
  const [selectedCoins, setSelectedCoins] = useState<string[]>(
    parseStorage(StorageKey.SELECTED_COINS)
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(1);

  const handleOutsideClick = () => {
    setDropdownOpen(false);
    setActiveTab(1);
  };

  const handleDropDownToggle = () => {
    setDropdownOpen(!dropdownOpen);
    setActiveTab(1);
  };

  const handleSearchQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const fuse = useMemo(
    () => new Fuse(activeTab ? coins : selectedCoins),
    [coins, activeTab, selectedCoins]
  );
  const searchResults = fuse.search(searchQuery);

  useEffect(() => {
    setSelectedCoins(parseStorage(StorageKey.SELECTED_COINS));
  }, [activeTab]);

  useEffect(() => {
    getCoins().then((data) => {
      setCoins(data);
    });
  }, []);

  return (
    <div className="wrapper">
      {coins.length > 0 && (
        <Dropdown
          onOutsideClick={handleOutsideClick}
          open={dropdownOpen}
          dropDownToggle={
            <Button active={dropdownOpen} onClick={handleDropDownToggle}>
              <Icon name={IconName.SEARCH} />
              search
            </Button>
          }
          droppableContent={
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
                      <VirtualList
                        items={searchQuery ? searchResults : coins}
                      />
                    ),
                  },
                ]}
              />
            </>
          }
        />
      )}
    </div>
  );
}

export default App;
