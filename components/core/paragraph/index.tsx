"use client";

import classNames from "classnames";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  className?: string;
};

export default function Paragraph({ children, className }: Props) {
  return (
    <p
      className={classNames(
        "font-sans font-normal leading-[1.5rem] text-[0.875rem] width-[min-content] lg:max-w-[1200px]",
        className
      )}
    >
      {children}
    </p>
  );
}
