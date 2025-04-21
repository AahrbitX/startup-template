"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

function ScrollText() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  return (
    <div
      ref={containerRef}
      className="overflow-hidden bg-black py-4 text-primary"
    >
      <motion.div
        style={{ x }}
        className="text-4xl md:text-5xl lg:text-6xl font-heading whitespace-nowrap translate-x-22"
      >
        Moderno&emsp;&emsp;Moderno&emsp;&emsp;Moderno&emsp;&emsp;Moderno&emsp;&emsp;Moderno&emsp;&emsp;Moderno
      </motion.div>
    </div>
  );
}

export default ScrollText;
