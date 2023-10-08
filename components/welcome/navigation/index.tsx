"use client";

import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import LinkButton from "../../core/buttons/link";
import PrimaryLogo from "../../core/logo/light/primary";
import SecondaryButton from "../../core/buttons/secondary";

export default function Navbar() {
  return (
    <header className="w-full sticky z-10 px-5 lg:px-7 flex flex-row justify-between items-center py-5">
      <Link href="/">
        <PrimaryLogo className="scale-[.8]" />
      </Link>
      <div className="flex flex-row justify-between items-center space-x-2">
        <Link href={"/login"}>
          <LinkButton>
            <span>Login</span>
            <FiChevronRight className="text-accentPrimary" strokeWidth={3} />
          </LinkButton>
        </Link>
        <Link href={"/register"}>
          <SecondaryButton>
            <span>Get started</span>
            <FiChevronRight className="text-primary" strokeWidth={3} />
          </SecondaryButton>
        </Link>
      </div>
    </header>
  );
}
