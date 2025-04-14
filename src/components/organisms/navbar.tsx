import React from "react";
import NavigationMenu from "../molecules/navigation";

function Navbar() {
  return (
    <nav className="py-6 px-1 flex items-center justify-between">
      <span>Moderno</span>
      <NavigationMenu />
    </nav>
  );
}

export default Navbar;
