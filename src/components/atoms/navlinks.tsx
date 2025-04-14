import Link from "next/link";
import React from "react";

type NavLinkProps = {
  href: string;
  text: string;
};

function NavLink({ href, text }: NavLinkProps) {
  return <Link href={href}>{text}</Link>;
}

export default NavLink;
