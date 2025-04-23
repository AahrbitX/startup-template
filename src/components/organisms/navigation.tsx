"use client";
import React, { useState } from "react";
import { SideMenuBtn } from "../molecules/menu-button";
import { cn } from "@/lib/cn";
import Link from "next/link";
import { HyperText } from "../molecules/scramble-text";
import { motion, AnimatePresence } from "motion/react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "Projects", href: "/#projects" },
  ];

  return (
    <nav className="fixed top-2 z-[1000] w-full my-3">
      <div
        className={cn(
          "px-4 md:px-8 lg:px-12 max-w-6xl mx-2 lg:mx-auto bg-neutral-800 ",
          isMobileMenuOpen ? "rounded-t-3xl" : "rounded-3xl"
        )}
      >
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold font-mono">
              Morderno
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4">
            {links.map(({ label, href }) => (
              <Link key={label} href={href} className="px-3 py-2 text-white">
                <span className="inline-block">
                  <HyperText className="text-md" as="span" animateOnHover>
                    {label}
                  </HyperText>
                </span>
              </Link>
            ))}
          </div>

          <div className="flex md:hidden">
            <SideMenuBtn
              crossed={isMobileMenuOpen}
              setCrossedState={setIsMobileMenuOpen}
            />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ delay: 0.1, duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden fixed left-0 right-0 top-16 z-50 w-full px-2 md:hidden"
          >
            <div className="bg-neutral-800 flex flex-col space-y-3 rounded-b-3xl py-4 px-4">
              {links.map(({ label, href }) => (
                <Link key={label} href={href} className="px-3 py-2 text-white">
                  {label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
