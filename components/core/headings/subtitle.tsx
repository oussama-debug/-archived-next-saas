"use client";

import classNames from "classnames";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  className?: string;
};

export default function Subtitle({ children, className }: Props) {
  return (
    <span
      className={classNames(
        "font-sans font-medium leading-[1.5rem] text-[1.3rem] width-[min-content] lg:max-w-[1200px] text-primary",
        className
      )}
    >
      {children}
    </span>
  );
}
