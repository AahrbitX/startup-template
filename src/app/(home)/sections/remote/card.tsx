import React from "react";
import { Meteors } from "@/components/molecules/metors";

type MeteorsCardProps = {
  title: string;
  description: string;
  buttonLabel?: string;
};

export default function MeteorsCard({
  title,
  description,
  buttonLabel = "Explore",
}: MeteorsCardProps) {
  return (
    <div className="w-full px-4 py-8 group">
      <div className="relative w-full">
        <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-gradient-to-r from-primary to-slate-500 blur-3xl" />
        <div className="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 px-6 py-8 shadow-xl">
          <div className="mb-4 flex h-5 w-5 items-center justify-center rounded-full border border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300 group-hover:rotate-360 duration-500 ease-in-out"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>

          <h1 className="relative z-50 mb-4 text-xl font-bold text-white">
            {title}
          </h1>

          <p className="relative z-50 mb-4 text-base font-normal text-slate-400">
            {description}
          </p>

          <button className="rounded-lg border border-gray-500 px-4 py-1 text-gray-300">
            {buttonLabel}
          </button>

          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}
