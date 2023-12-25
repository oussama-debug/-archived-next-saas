import React from "react";
import { TbPlus, TbSmartHome } from "react-icons/tb";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/core/button";

export default function SideNavigation() {
  return (
    <div className="flex flex-col overflow-y-hidden min-h-screen border-r border-slate-50 bg-white py-0 w-full lg:w-[250px]">
      <div className="flex h-16 items-center px-5">
        <Image src={"/logo-black.png"} alt="" height={100} width={100} />
      </div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-1">
          <li className="flex flex-col justify-start items-start space-y-1">
            <ul className="flex flex-col w-full space-y-1 px-4">
              <li className="uppercase font-medium text-xs text-gray-400 tracking-wide">
                main
              </li>
              <li className="font-inter font-medium py-1 rounded text-sm text-primary">
                <Link
                  href={"/organization/dashboard"}
                  className="flex flex-row justify-start items-center space-x-2"
                >
                  <TbSmartHome size={18} />
                  <h2>Dashboard</h2>
                </Link>
              </li>
            </ul>
          </li>
          <li className="flex flex-col justify-start items-start">
            <ul className="flex flex-col w-full px-4">
              <li className="uppercase flex flex-row justify-between items-center font-medium text-xs text-gray-400 tracking-wide">
                <span>channels</span>
                <Link href="/organization/channels/create">
                  <Button
                    variant={"monochrome"}
                    modifier={"plain"}
                    loading={false}
                    size={"slim"}
                  >
                    <TbPlus className="text-gray-500" size={17} />
                  </Button>
                </Link>
              </li>
            </ul>
          </li>
          <li></li>
        </ul>
      </nav>
    </div>
  );
}
