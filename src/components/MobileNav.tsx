"use client";

import * as React from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { links } from "../lib/data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useTheme } from "next-themes";
import Image from "next/image";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 flex w-full h-16 bg-black/20 backdrop-blur-md lg:hidden">
      <div className="relative flex items-center justify-between w-full px-5">
        <Link href="/">
          <Image src="/images/icon.svg" alt="Logo" height={30} width={30} />
        </Link>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <svg
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
              >
                <path
                  d="M3 5H11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M3 12H16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M3 19H21"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="z-[9999]">
            {/* <MobileLink
              href="/"
              className="flex items-center"
              onOpenChange={setOpen}
            >
              <Image src="/images/icon.svg" alt="Logo" height={40} width={40} />
            </MobileLink> */}

            <ul className="flex flex-col items-start w-full px-6 py-3 pt-8 space-y-3">
              {links?.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    type: "spring",
                    bounce: 0.15,
                    duration: 0.1,
                    delay: 0.1 * index,
                  }}
                  onClick={() => setOpen(false)}
                  className="w-full px-4 py-2 text-lg font-normal text-white transition transform rounded-md cursor-pointer text-start active:scale-95 hover:bg-neutral-900 active:opacity-80"
                >
                  <Link href={link.hash} className="w-full text-center">
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  );
}
