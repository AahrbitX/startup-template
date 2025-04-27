import {
  IconBrandDiscord,
  IconBrandDribbble,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="max-w-6xl mx-auto py-10 px-4">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 md:px-4 lg:px-8 ">
          <div className="font-heading font-bold text-3xl mb-6">Moderno</div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 text-lg">
            <div>
              <p className="mb-4 font-semibold">Company</p>
              <div className="flex flex-col gap-4  text-primary">
                <Link href="#">About Us</Link>
                <Link href="#">Careers</Link>
                <Link href="#">Press</Link>
              </div>
            </div>
            <div>
              <p className="mb-4 font-semibold">Resources</p>
              <div className="flex flex-col gap-4  text-primary">
                <Link href="#">Blog</Link>
                <Link href="#">Help Center</Link>
                <Link href="#">Contact</Link>
              </div>
            </div>
            <div>
              <p className="mb-4 font-semibold">Legal</p>
              <div className="flex flex-col gap-4  text-primary">
                <Link href="#">Privacy Policy</Link>
                <Link href="#">Terms of Service</Link>
                <Link href="#">Cookie Policy</Link>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6" />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <span>
            &copy; {new Date().getFullYear()} Moderno. All rights reserved.
          </span>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Link href="#" aria-label="Instagram">
              <IconBrandInstagram className="h-6 w-6 hover:text-primary transition-colors duration-300" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <IconBrandLinkedin className="h-6 w-6 hover:text-primary transition-colors duration-300" />
            </Link>
            <Link href="#" aria-label="Discord">
              <IconBrandDiscord className="h-6 w-6 hover:text-primary transition-colors duration-300" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <IconBrandX className="h-6 w-6 hover:text-primary transition-colors duration-300" />
            </Link>
            <Link href="#" aria-label="Dribbble">
              <IconBrandDribbble className="h-6 w-6 hover:text-primary transition-colors duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
