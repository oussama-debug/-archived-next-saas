"use client";

import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import LinkButton from "@/components/core/buttons/link";
import SecondaryButton from "@/components/core/buttons/secondary";
import logoPrimary from "@/library/assets/logo-1.svg";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full sticky z-10 px-5 lg:px-14 flex flex-row justify-between items-center py-5">
      <Link href="/">
        <Image
          src={logoPrimary}
          width={100}
          height={20}
          alt={"Zenlanes social media management software"}
        />
      </Link>
      <nav className="hidden lg:flex flex-row justify-center items-center space-x-2">
        <Link href="/pricing">
          <LinkButton>
            <span>Pricing</span>
          </LinkButton>
        </Link>
        <Link href="/contact">
          <LinkButton>
            <span>Contact</span>
          </LinkButton>
        </Link>
      </nav>
      <div className="flex flex-row justify-between items-center space-x-2">
        <Link href={"/login"}>
          <LinkButton>
            <span>Login</span>
            <FiArrowRight className="text-accentPrimary" strokeWidth={3} />
          </LinkButton>
        </Link>
        <Link href={"/register"}>
          <SecondaryButton>
            <span>Get started</span>
            <FiArrowRight className="text-primary" strokeWidth={3} />
          </SecondaryButton>
        </Link>
      </div>
    </header>
  );
}
