"use client";

import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & { children?: ReactNode };

export default function PrimaryButton({ children, ...props }: Props) {
  return (
    <button
      {...props}
      className="bg-accentPrimary flex flex-row justify-center items-center space-x-1 rounded text-md font-medium font-sans text-[.9rem] px-2 py-0.5 text-white shadow-primary_button"
    >
      {children}
    </button>
  );
}
