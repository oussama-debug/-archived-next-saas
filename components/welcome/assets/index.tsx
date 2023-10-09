"use client";

import { BiSolidBolt } from "react-icons/bi";
import { BsStars } from "react-icons/bs";
import { FiMap } from "react-icons/fi";

export default function WelcomeAssets() {
  return (
    <section className="w-full bg-transparent min-h-[200px] flex flex-col justify-start items-start px-5 lg:px-12">
      <h2 className="font-sans text-md font-medium text-accentPrimary">
        Unified platform
      </h2>
      <div className="w-full bg-transparent grid grid-cols-1 lg:grid-cols-4 gap-y-5 lg:gap-y-0 py-5 gap-x-0 lg:gap-x-5">
        <div className="flex h-full flex-col justify-start space-y-1.5 items-start">
          <div className="flex flex-row justify-center items-center border border-slate-300 bg-secondary bg-opacity-20 px-1 py-1 rounded">
            <BiSolidBolt className="text-primary" />
          </div>
          <h3 className="font-medium text-md font-sans">
            Get up and running in minutes
          </h3>
          <p className="font-normal text-md font-sans text-gray-500">
            Effortlessly access various social media platforms via simplified
            channel creation for instant connectivity.
          </p>
        </div>
        <div className="flex h-full flex-col justify-start space-y-1.5 items-start">
          <div className="flex flex-row justify-center items-center border border-slate-300 bg-secondary bg-opacity-20 px-1 py-1 rounded">
            <FiMap className="text-primary" />
          </div>
          <h3 className="font-medium text-md font-sans">
            Across the customer journey
          </h3>
          <p className="font-normal text-md font-sans text-gray-500">
            Maximize Zenlanes for customer service, notifications, identity
            verification, and efficient marketing solutions.
          </p>
        </div>
        <div className="flex h-full flex-col justify-start space-y-1.5 items-start">
          <div className="flex flex-row justify-center items-center border border-slate-300 bg-secondary bg-opacity-20 px-1 py-1 rounded">
            <BsStars className="text-primary" />
          </div>
          <h3 className="font-medium text-md font-sans">
            Rich and interactive
          </h3>
          <p className="font-normal text-md font-sans text-gray-500">
            Swiftly connect with diverse social media platforms via a simplified
            channel setup for instant access.
          </p>
        </div>
        <div className="flex h-full flex-col justify-start space-y-1.5 items-start">
          <div className="flex flex-row justify-center items-center border border-slate-300 bg-secondary bg-opacity-20 px-1 py-1 rounded">
            <BiSolidBolt className="text-primary" />
          </div>
          <h3 className="font-medium font-sans">Build brand loyalty</h3>
          <p className="font-normal font-sans text-gray-500">
            Enhance conversion rates throughout the customer journey for
            increased business success.
          </p>
        </div>
      </div>
    </section>
  );
}
