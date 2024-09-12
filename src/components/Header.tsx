"use client";

import { links } from "../lib/data";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";

const springTransition = {
  type: "spring",
  stiffness: 260,
  damping: 20,
};

const getActiveLink = (pathname: string) => {
  if (pathname.includes("projects")) return "Projects";
  if (pathname === "/") return "Home";
  return "";
};

const NavLink = ({
  link,
  activeLink,
  setActiveLink,
}: {
  link: any;
  activeLink: string;
  setActiveLink: (name: string) => void;
}) => (
  <motion.li
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      type: "spring",
      bounce: 0.3,
      duration: 0.1,
      delay: 0.1,
    }}
    className="relative text-sm text-gray-400"
  >
    <Link
      href={link.hash}
      onClick={() => setActiveLink(link.name)}
      className={cn(
        "flex items-center justify-center px-4 py-2 transition hover:text-white",
        activeLink === link.name && "text-white"
      )}
    >
      {link.name}
      {activeLink === link.name && (
        <motion.span
          layoutId="activeLink"
          transition={{ type: "spring", bounce: 0.3 }}
          className="absolute inset-0 border-t rounded-full shadow-md backdrop-blur-lg border-neutral-800 bg-gradient-to-b shadow-black/50 from-neutral-900/80 to-neutral-900 -z-10"
        />
      )}
    </Link>
  </motion.li>
);

const Header = () => {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(getActiveLink(pathname));

  return (
    <header className="z-[9999] relative">
      {/* Navbar Background */}
      <motion.div
        initial={{ y: -100, opacity: 0, x: "-50%" }}
        animate={{ y: 0, opacity: 1, x: "-50%" }}
        transition={{ ...springTransition, duration: 0.7 }}
        className="fixed top-0 -translate-x-1/2 w-full h-16 bg-black/20 border border-neutral-800/50 rounded-none shadow-lg left-1/2 bg-opacity-80 shadow-black/50 backdrop-blur-md sm:top-6 sm:h-12 sm:w-[28rem] sm:rounded-full mx-auto hidden lg:inline-block"
      >
        <motion.div
          initial={{ opacity: 0, x: "-50%" }}
          animate={{ opacity: 1, x: "-50%" }}
          transition={{ ...springTransition, duration: 0.4 }}
          className="absolute bottom-0 -translate-x-1/2 w-full h-4 bg-gradient-to-b hidden from-violet-200/30 rounded-full blur left-1/2 sm:h-2 sm:w-[35rem] mx-auto"
        />
      </motion.div>

      {/* Desktop Navbar */}
      <nav className="fixed hidden lg:flex z-[9999] top-[0.5rem] left-1/2 -translate-x-1/2 py-2 overflow-x-scroll max-w-full sm:top-[1.5rem] sm:h-12 sm:py-0 h-12 scrollbar-hide">
        <ul className="flex items-center justify-center gap-x-4 w-[28rem] h-full">
          {links?.map((link) => (
            <NavLink
              key={link.name}
              link={link}
              activeLink={activeLink}
              setActiveLink={setActiveLink}
            />
          ))}
        </ul>
      </nav>

      {/* Mobile & Tablet Navbar */}
      <MobileNav />
    </header>
  );
};

export default Header;
