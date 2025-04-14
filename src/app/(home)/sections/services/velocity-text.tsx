"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import React, { useRef } from "react";

const VelocityText = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const xRaw = useTransform(scrollYProgress, [0, 1], [0, -1850]);
  const x = useSpring(xRaw, { mass: 3, stiffness: 300, damping: 40 });

  const skewXRaw = useTransform(scrollYProgress, [0, 1], ["10deg", "-10deg"]);
  const skewX = useSpring(skewXRaw, { mass: 3, stiffness: 300, damping: 40 });

  return (
    <section
      ref={targetRef}
      className="bg-black text-primary py-10 font-heading font-semibold"
    >
      <div className="sticky top-0 flex items-center overflow-hidden">
        <motion.p
          style={{ x, skewX }}
          className="whitespace-nowrap text-5xl font-black uppercase leading-[0.85] md:text-7xl md:leading-[0.85]"
        >
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;discuss your ideas and make
          new start with us
        </motion.p>
      </div>
    </section>
  );
};

export default VelocityText;
