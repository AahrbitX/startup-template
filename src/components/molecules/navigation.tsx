import React from "react";
import NavLink from "../atoms/navlinks";

function NavigationMenu() {
  return (
    <div className="flex items-center gap-4 justify-center">
      <NavLink href="/" text="Home" />
      <NavLink href="#about" text="About" />
      <NavLink href="#projects" text="Projects" />
      <NavLink href="#services" text="Services" />
    </div>
  );
}

export default NavigationMenu;
