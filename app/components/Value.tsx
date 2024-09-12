import { Meteors } from "@/components/ui/meteors";
import React from "react";
import { valueCards } from "../constants/index.c";

export default function MeteorsDemo() {
  return (
    <section className="container bg-gray-200 flex flex-col gap-8 justify-between lg:px-20">
      <div>
        <h3 className="text-lg font-medium text-yellow-600">(03) Our Value</h3>
        <h2 className="text-3xl font-semibold mt-4 lg:text-5xl">
          Light Up your Life with Innovation.
        </h2>
      </div>
      <div className="flex flex-col items-center gap-2 md:flex-row">
        {valueCards.map((card, index) => (
          <div className="" key={index}>
            <div className=" w-full relative max-w-lg">
              <div className="absolute inset-0 h-full w-full  transform scale-[0.80]  rounded-full blur-3xl " />
              <div className="relative px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start hover:bg-gray-300">
                <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-2 w-2 text-gray-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                    />
                  </svg>
                </div>

                <h1 className="font-bold text-xl text-black mb-4 relative z-50">
                  {card.title}
                </h1>

                <p className="font-normal text-base text-slate-700 mb-4 relative z-50">
                  {card.desc}
                </p>

                <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-500">
                  Explore
                </button>

                {/* Meaty part - Meteor effect */}
                <Meteors number={20} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
