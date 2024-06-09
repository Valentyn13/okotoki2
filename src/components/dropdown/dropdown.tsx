import clsx from "clsx";
import { FC, useEffect, useRef } from "react";

type DropdownProps = {
  open: boolean;
  onOutsideClick: () => void;
  dropDownToggle: JSX.Element;
  droppableContent: JSX.Element;
};

export const Dropdown: FC<DropdownProps> = ({
  open,
  dropDownToggle,
  droppableContent,
  onOutsideClick,
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  function handleClickOutside(event: globalThis.MouseEvent) {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      onOutsideClick();
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="dropdown">
      {dropDownToggle}
      <div
        className={clsx("dropdown-content", {
          "dropdown-content-open": open,
        })}
      >
        {droppableContent}
      </div>
    </div>
  );
};
