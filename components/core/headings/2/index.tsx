"use client";

import classNames from "classnames";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  className?: string;
};

export default function Heading2({ children, className }: Props) {
  return (
    <h2
      className={classNames(
        "font-sans font-bold leading-[1.2em] text-[2.25rem] width-[min-content] lg:max-w-[1200px] text-primary",
        className
      )}
    >
      {children}
    </h2>
  );
}
