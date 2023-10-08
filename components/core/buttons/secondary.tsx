"use client";

import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & { children?: ReactNode };

export default function SecondaryButton({ children, ...props }: Props) {
  return (
    <button
      {...props}
      className="bg-white rounded text-md font-medium flex flex-row justify-center items-center space-x-1 font-sans text-[.9rem] px-2 py-0.5 text-primary shadow-primary_button"
    >
      {children}
    </button>
  );
}
