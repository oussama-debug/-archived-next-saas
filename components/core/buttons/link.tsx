"use client";

import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & { children?: ReactNode };

export default function LinkButton({ children, ...props }: Props) {
  return (
    <button
      {...props}
      className="bg-transparent flex flex-row justify-center items-center space-x-1 text-accentPrimary rounded text-md font-medium font-sans text-[0.875rem] px-2 py-0.5 hover:bg-accentPrimary hover:bg-opacity-5"
    >
      {children}
    </button>
  );
}
