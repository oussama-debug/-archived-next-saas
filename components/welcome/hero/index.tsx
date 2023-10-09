"use client";

import LinkButton from "@/components/core/buttons/link";
import SecondaryButton from "@/components/core/buttons/secondary";
import Container from "@/components/core/container";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function WelcomeHero() {
  return (
    <Container>
      <section className="w-full min-h-[600px] py-10 lg:py-12 grid grid-cols-1 gap-x-2 px-5 lg:px-10 lg:grid-cols-2">
        <div className="flex flex-col space-y-2 max-w-[560px] justify-center items-start">
          <h1 className="text-7xl px-2 font-sans font-bold leading-[1.05em] text-[3.875rem] text-primary">
            Experience Empowerment Unleashed
          </h1>
          <p className="text-gray-500 px-2 font-sans font-normal text-md">
            Companies of all sizes use Zenlanes online and in person to Build
            lasting relationships with their customers with our complete
            customer service solution and ultimately grow revenue.
          </p>
          <div className="w-full py-1 flex flex-row justify-start items-center space-x-2">
            <Link href={"/contact"}>
              <LinkButton>
                <span>Contact sales</span>
                <FiArrowRight className="text-accentPrimary" strokeWidth={3} />
              </LinkButton>
            </Link>
            <Link href={"/register"}>
              <SecondaryButton className="text-primary">
                <span className="text-black">Get started for free</span>
                <FiArrowRight className="text-primary" strokeWidth={3} />
              </SecondaryButton>
            </Link>
          </div>
        </div>
      </section>
    </Container>
  );
}
