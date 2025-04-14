"use client";
import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import { IconArrowRight } from "@tabler/icons-react";
import React, { useRef } from "react";

const ServiceCards = () => {
  return (
    <section className="w-full">
      <div className="">
        <Link
          heading="About"
          subheading="Learn what we do here"
          imgSrc="https://images.unsplash.com/photo-1541873676-a18131494184?q=80&w=1436&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          href="#"
        />
        <Link
          heading="Clients"
          subheading="We work with great people"
          imgSrc="https://images.unsplash.com/photo-1614315517650-3771cf72d18a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          href="#"
        />
        <Link
          heading="Portfolio"
          subheading="Our work speaks for itself"
          imgSrc="https://images.unsplash.com/photo-1637958653605-4590ff5fc440?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          href="#"
        />
        <Link
          heading="Careers"
          subheading="We want cool people"
          imgSrc="https://images.unsplash.com/photo-1637958652502-d19dadaa86c3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          href="#"
        />
        <Link
          heading="Fun"
          subheading="Incase you're bored"
          imgSrc="https://images.unsplash.com/photo-1494022299300-899b96e49893?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          href="#"
        />
      </div>
    </section>
  );
};
interface LinkProps {
  heading: string;
  imgSrc: string;
  subheading: string;
  href: string;
}
const Link = ({ heading, imgSrc, subheading, href }: LinkProps) => {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);
  const handleMouseMove = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const rect = ref.current!.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };
  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
    >
      <div>
        <span className="relative z-10 block text-4xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-primary md:text-6xl">
          {heading}
        </span>
        <span className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50">
          {subheading}
        </span>
      </div>
      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { opacity: 0, scale: 0.8, rotate: "-2.5deg" },
          whileHover: { opacity: 1, scale: 1, rotate: "2.5deg" },
        }}
        transition={{
          type: "tween",
          duration: 0.45,
          ease: "easeInOut",
        }}
        src={imgSrc}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
      />
      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <IconArrowRight className="text-5xl text-primary" />
      </motion.div>
    </motion.a>
  );
};
export default ServiceCards;
