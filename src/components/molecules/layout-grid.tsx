"use client";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { motion } from "motion/react";
import { unstable_ViewTransition as ViewTransition } from "react";
import React, { JSX } from "react";

type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
  link: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4 relative mb-26">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "min-h-76")}>
          <motion.div
            className={cn(
              card.className,
              "relative overflow-hidden bg-white rounded-xl h-full w-full"
            )}
          >
            <ImageComponent card={card} />
          </motion.div>
        </div>
      ))}
    </div>
  );
};

const ImageComponent = ({ card }: { card: Card }) => {
  return (
    <Link href={`/projects/${card.link}`}>
      <ViewTransition name="project-image">
        <img
          src={card.thumbnail}
          className={cn(
            "object-cover   absolute inset-0 h-full w-full transition duration-200"
          )}
          alt="thumbnail"
        />
      </ViewTransition>
    </Link>
  );
};
