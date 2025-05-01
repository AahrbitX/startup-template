"use client";

import React from "react";
import { motion } from "motion/react";
import { IconArrowRight } from "@tabler/icons-react";
import Iridescence from "@/components/organisms/iridicense";

function Section2() {
  return (
    <div className="md:px-4 lg:px-8 pt-10 relative md:pt-5 lg:pt-0 h-full group">
      <motion.div
        initial={{ x: -120, rotate: -720, opacity: 0 }}
        animate={{ x: 0, rotate: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-neutral-900 inline-block rounded-full p-4 md:p-5 absolute right-18 md:right-28 top-2 md:-top-10 border-4 "
      >
        <IconArrowRight className="size-8 md:size-14 -rotate-45 text-primary group-hover:rotate-325 duration-300 ease-out" />
      </motion.div>
      {/* 
      <Iridescence
        color={[1, 1, 1]}
        mouseReact={false}
        amplitude={0.08}
        speed={0.4}
        className="rounded-t-[50px] overflow-hidden"
      /> */}

      <figure className="overflow-hidden rounded-t-[50px] w-full h-full bg-[url('/abstract-fluid.jpg')] bg-cover bg-no-repeat bg-center flex items-center justify-center"></figure>
    </div>
  );
}

export default Section2;
