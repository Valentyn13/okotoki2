import { FC, useEffect, useState } from "react";

import { Icon } from "../icon/icon";
import { IconName, StorageKey } from "../../constants/constants";
import { localStorageToggler } from "../../lib/storage-toggler";
import { parseStorage } from "../../lib/parse-storage";

type ListItemProps = {
  item: string;
};

export const ListItem: FC<ListItemProps> = ({ item }) => {
  const [selected, setSelected] = useState<boolean>();

  const handleClick = () => {
    localStorageToggler(item, StorageKey.SELECTED_COINS);
    setSelected(!selected);
  };

  useEffect(() => {
    const allItems = parseStorage(StorageKey.SELECTED_COINS);
    setSelected(allItems.includes(item));
  }, [item]);

  return (
    <div className="list-item">
      <Icon
        onClick={handleClick}
        name={selected ? IconName.STAR_SOLID : IconName.STAR_REGULAR}
      />
      {item}
    </div>
  );
};
