"use client";

import classNames from "classnames";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  className?: string;
  uppercase?: boolean;
};

export default function Heading3({
  children,
  uppercase = false,
  className,
}: Props) {
  return (
    <h3
      className={classNames(
        "font-sans font-medium leading-[1.6em] text-[1rem] width-[min-content] lg:max-w-[1200px] text-primary",
        uppercase && "uppercase",
        className
      )}
    >
      {children}
    </h3>
  );
}
