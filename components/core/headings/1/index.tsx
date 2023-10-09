"use client";

import classNames from "classnames";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  className?: string;
};

export default function Heading1({ children, className }: Props) {
  return (
    <h1
      className={classNames(
        "font-sans font-bold leading-[1.05em] text-[3.875rem] width-[min-content] text-primary",
        className
      )}
    >
      {children}
    </h1>
  );
}
