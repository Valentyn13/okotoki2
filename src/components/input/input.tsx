import { InputHTMLAttributes, FC } from "react";

import { Icon } from "../icon/icon";
import { IconName } from "../../constants/constants";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: FC<InputProps> = ({ ...props }) => {
  return (
    <div className="icon-input">
      <Icon name={IconName.SEARCH} />
      <input {...props} />
    </div>
  );
};
