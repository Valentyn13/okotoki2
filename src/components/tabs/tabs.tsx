import { FC } from "react";
import clsx from "clsx";

import { Button } from "../button/button";
import { Icon } from "../icon/icon";
import { IconName } from "../../constants/constants";

type TabElement = {
  title: string;
  render: () => JSX.Element;
};

type TabElementList = TabElement[];

type TabsProps = {
  tabs: TabElementList;
  activeTabIndex: number;
  setActiveTabIndex: (index: number) => void;
};

export const Tabs: FC<TabsProps> = ({
  tabs,
  activeTabIndex,
  setActiveTabIndex,
}) => {
  return (
    <div className="tabs">
      <div className="tabs-controll">
        {tabs.map((tab, index) => (
          <Button
            className={clsx("button", {
              ["tab-button-active"]: index === activeTabIndex,
            })}
            key={tab.title}
            onClick={() => setActiveTabIndex(index)}
          >
            {!index && <Icon name={IconName.STAR_SOLID} />}
            {tab.title}
          </Button>
        ))}
      </div>
      <div className="tabs-content">{tabs[activeTabIndex].render()}</div>
    </div>
  );
};
