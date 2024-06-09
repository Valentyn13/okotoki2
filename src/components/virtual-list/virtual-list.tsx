import { FC, useState, UIEvent } from "react";
import { FuseResult } from "fuse.js";

import { ListItem } from "../list-item/list-itemt";

const itemHeight = 28;
const windowHeight = 300;
const overscan = 5;

type VirtualListProps = {
  items: FuseResult<string>[] | string[];
};

const isFuseResult = (
  item: FuseResult<string> | string
): item is FuseResult<string> => {
  return (item as FuseResult<string>).item !== undefined;
};

export const VirtualList: FC<VirtualListProps> = ({ items }) => {
  const [scrollTop, setScrollTop] = useState(0);

  const numberOfItems = items.length;
  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
  let renderedNodesCount = Math.floor(windowHeight / itemHeight) + 2 * overscan;
  renderedNodesCount = Math.min(numberOfItems - startIndex, renderedNodesCount);

  const generateRows = () => {
    const elements: JSX.Element[] = [];

    if (isFuseResult(items[0])) {
      for (let i = 0; i < renderedNodesCount; i++) {
        const index = i + startIndex;
        const listItem = items[index] as FuseResult<string>;
        elements.push(<ListItem key={index} item={listItem.item} />);
      }
    } else {
      for (let i = 0; i < renderedNodesCount; i++) {
        const index = i + startIndex;
        const listItem = items[index] as string;
        elements.push(<ListItem key={index} item={listItem} />);
      }
    }

    return elements;
  };

  const handleScrollTop = (e: UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  };

  return (
    <div className="virtual-list" onScroll={handleScrollTop}>
      <div
        style={{
          height: `${numberOfItems * itemHeight}px`,
        }}
      >
        <div
          className="virtual-translate-container"
          style={{
            transform: `translateY(${startIndex * itemHeight}px)`,
          }}
        >
          {numberOfItems > 0 ? generateRows() : <p>No items</p>} {}
        </div>
      </div>
    </div>
  );
};
