"use client";

import React from "react";
import { motion } from "motion/react";
import { IconArrowRight } from "@tabler/icons-react";

function Section2() {
  return (
    <div className="md:px-4 lg:px-8 mt-10 relative md:mt-5 lg:mt-0">
      <motion.div
        initial={{ x: -120, rotate: -720 }}
        animate={{ x: 0, rotate: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-neutral-900 inline-block rounded-full p-4 md:p-5 absolute right-18 md:right-28 -top-8 md:-top-10 border-4"
      >
        <IconArrowRight className="size-8 md:size-14 -rotate-45 text-primary" />
      </motion.div>

      <figure className="overflow-hidden rounded-t-[50px] w-full h-full bg-[url('/abstract-fluid.jpg')] bg-cover bg-no-repeat bg-center flex items-center justify-center"></figure>
    </div>
  );
}

export default Section2;
