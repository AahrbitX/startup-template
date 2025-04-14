"use client";
import React, { useState } from "react";
import { IconCancel, IconMenu } from "@tabler/icons-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 w-full z-[1000]">
      <div className={`bg-neutral-900  px-4`}>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold">
              Morderno
            </a>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4">
            <a href="#" className="px-3 py-2  text-white">
              Home
            </a>
            <a href="#about" className="px-3 py-2  text-white">
              About
            </a>
            <a href="#services" className="px-3 py-2  text-white">
              Services
            </a>
            <a href="#projects" className="px-3 py-2  text-white">
              Projects
            </a>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-neutral-400 hover:text-white"
            >
              {isMobileMenuOpen ? (
                <IconCancel className="h-6 w-6" />
              ) : (
                <IconMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed left-0 right-0 top-16 z-50 w-full bg-neutral-900 py-4 px-4 md:hidden">
          <div className="flex flex-col space-y-3">
            <a href="#" className="px-3 py-2  text-white">
              Home
            </a>
            <a href="#about" className="px-3 py-2  text-white">
              About
            </a>
            <a href="#services" className="px-3 py-2  text-white">
              Services
            </a>
            <a href="#projects" className="px-3 py-2  text-white">
              Projects
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
