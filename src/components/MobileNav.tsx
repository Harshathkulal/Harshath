"use client";

import { links } from "@/lib/data";
import { AnimatePresence, motion } from "framer-motion";
import { Spin as Hamburger } from 'hamburger-react'
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navClasses =
    "fixed top-0 left-0 right-0 flex w-full h-16 bg-black/20 backdrop-blur-md lg:hidden";
  const sidebarClasses =
    "fixed z-[9999] rounded-lg w-full h-screen inset-0 backdrop-blur-md bg-black";

  const variants = {
    open: { x: 0 },
    closed: { x: "100%" },
  };

  const toggleMenu = () => {
    setIsOpen((prev) => {
      document.body.style.overflow = prev ? "auto" : "hidden";
      return !prev;
    });
  };

  return (
    <nav className={navClasses}>
      <div className="relative flex items-center justify-between w-full px-5">
        <Link href="/">
          <Image
            src="/images/icon.svg"
            alt="Logo"
            height={30}
            width={30}
            priority
          />
        </Link>

        <div className="relative flex z-[99999] items-center">
          <Hamburger
            toggled={isOpen}
            toggle={toggleMenu}
            color="#fff"
            direction="left"
            distance="md"
            size={20}
            rounded
          />
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={variants}
              transition={{
                type: "spring",
                bounce: 0.15,
                duration: 0.5,
              }}
              className={sidebarClasses}
            >
              <Image
                src="/images/icon.svg"
                alt="Logo"
                height={30}
                width={30}
                className="pt-4 ml-4"
                priority={false}
              />
              <ul className="flex flex-col items-center w-full px-6 py-3 pt-16 space-y-4">
                {links?.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                    exit={{ y: -20 }}
                    transition={{
                      type: "spring",
                      bounce: 0.15,
                      duration: 0.2,
                      delay: 0.1 * index,
                    }}
                    onClick={() => setIsOpen(false)}
                    className="w-full px-4 py-2 text-lg font-normal text-white transition transform rounded-md cursor-pointer text-center active:scale-95 hover:bg-neutral-900 active:opacity-80"
                  >
                    <Link href={link.hash}>{link.name}</Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default MobileNav;
