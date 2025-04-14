import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="">
      <h3 className="my-6 font-heading text-4xl text-center text-primary">
        Morderno
      </h3>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:mb-10">
        <Link href="#" className="text-primary hover:underline">
          Terms &amp; Agreements
        </Link>
        <span className="text-sm text-primary hidden lg:inline-block">
          &copy; 2025 All right Reserved
        </span>
        <Link href="#" className="text-primary hover:underline">
          Privacy Policy
        </Link>
      </div>
      <p className=" mt-5 mb-5 text-center text-sm text-primary lg:hidden ">
        &copy; 2025 All right Reserved
      </p>
    </footer>
  );
}

export default Footer;
