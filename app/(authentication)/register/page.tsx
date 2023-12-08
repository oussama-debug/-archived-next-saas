import Button from "@/components/core/button";
import Image from "next/image";
import Link from "next/link";
import { FaGoogle, FaTwitter } from "react-icons/fa6";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zenlanes, Get your free account now",
  description:
    "Start Managing all of your social media in one place, and start growing your business in two clicks",
};

export default async function Register() {
  return (
    <section className="min-w-screen min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="bg-white flex flex-col justify-center items-center">
        <div className="flex max-w-[320px] flex-col font-sans font-medium justify-center items-start py-1.5 space-y-4">
          <Image
            src={"/logo-white.png"}
            width={150}
            height={100}
            alt="Zenlanes social media management tool"
          />
          <div className="space-y-0 w-full flex flex-col justify-start items-start">
            <p className="text-sm text-gray-500 font-medium">
              Manage all of your social media in one place, and start growing
              your business in two clicks.
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full py-1 space-y-1.5 justify-start items-start max-w-[320px]">
          <Link href={`${process.env.GATEWAY_ENDPOINT}/api/v1/google/redirect`}>
            <Button
              variant={"primary"}
              loading={false}
              className="flex flex-row justify-start items-center space-x-2"
            >
              <div className="flex flex-row justify-center items-center space-x-2">
                <FaGoogle size={16} />
                <span>Create an account with Google</span>
              </div>
            </Button>
          </Link>
          <Link
            href={`${process.env.GATEWAY_ENDPOINT}/api/v1/twitter/redirect`}
          >
            <Button
              variant={"primary"}
              loading={false}
              className="flex flex-row justify-start items-center space-x-2"
            >
              <div className="flex flex-row justify-center items-center space-x-2">
                <FaTwitter size={16} />
                <span>Create an account with Twitter</span>
              </div>
            </Button>
          </Link>
        </div>
      </div>
      <div className="bg-white hidden lg:block opacity-30"></div>
    </section>
  );
}
