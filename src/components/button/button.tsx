import clsx from "clsx";
import { ButtonHTMLAttributes, FC, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  active?: boolean;
}

export const Button: FC<ButtonProps> = ({
  children,
  active = false,
  ...otherProps
}) => {
  return (
    <button
      className={clsx("button", { ["button-active"]: active })}
      {...otherProps}
    >
      {children}
    </button>
  );
};
