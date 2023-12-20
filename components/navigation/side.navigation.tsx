import React from "react";
import {
  TbBrandGoogle,
  TbBrandInstagram,
  TbPlus,
  TbBrandFacebook,
  TbSmartHome,
} from "react-icons/tb";
import Link from "next/link";
import Button from "@/components/core/button";

export default function SideNavigation() {
  return (
    <div className="flex flex-col overflow-y-hidden min-h-screen border-r border-slate-50 bg-white py-5 w-full lg:w-[250px]">
      <div className="flex h-16 items-center px-5">
        <h1 className="font-sans text-md font-medium">
          my<span className="text-primary">beauty</span>master
        </h1>
      </div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-4">
          <li className="flex flex-col justify-start items-start space-y-2">
            <ul className="flex flex-col w-full space-y-2 px-4">
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
          <li className="flex flex-col justify-start items-start space-y-2">
            <ul className="flex flex-col w-full space-y-3 px-4">
              <li className="uppercase flex flex-row justify-between items-center font-medium text-xs text-gray-400 tracking-wide">
                <span>channels</span>
                <Button
                  variant={"monochrome"}
                  modifier={"plain"}
                  loading={false}
                  size={"slim"}
                >
                  <TbPlus className="text-gray-500" size={17} />
                </Button>
              </li>
              <li className="font-inter font-medium rounded text-sm text-gray-500 bg-opacity-20">
                <Link
                  href={"/organization/dashboard"}
                  className="flex flex-row justify-start items-center space-x-2"
                >
                  <TbBrandInstagram size={20} />
                  <h2>Instagram</h2>
                </Link>
              </li>
              <li className="font-inter font-medium rounded text-sm text-gray-500 bg-opacity-20">
                <Link
                  href={"/organization/dashboard"}
                  className="flex flex-row justify-start items-center space-x-3"
                >
                  <TbBrandFacebook size={20} className="-mx-0.5" />
                  <h2>Facebook</h2>
                </Link>
              </li>
              <li className="font-inter font-medium rounded text-sm text-gray-500 bg-opacity-20">
                <Link
                  href={"/organization/dashboard"}
                  className="flex flex-row justify-start items-center space-x-2.5"
                >
                  <TbBrandGoogle size={18} />
                  <h2>Google</h2>
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
