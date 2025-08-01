"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import commons_components from "@/utils/commons_components.json";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { StyledTitle } from "../StyledTitle";
import { Button } from "../ui/button";

const Navbar = () => {
  const { logo, navbar } = commons_components;
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-51 transition-all duration-300 ${
        isScrolled ? "bg-dark/70 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="containerBody flex justify-between items-center py-5">
        <Link
          className=" border-accent  border-2 bg-dark h5 px-5 py-2"
          href="/home"
        >
          <StyledTitle mainTitle={logo} />
        </Link>
        <div className="hidden md:flex gap-4 ">
          {navbar.menu.map((item) => (
            <Link key={item.name} href={item.href}>
              <Button
                variant="link"
                className={`${
                  pathname === item.href
                    ? "text-accent underline"
                    : "text-tertiary"
                } transition-all duration-300 pl-0`}
              >
                {item.name}
              </Button>
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu className={`w-6 h-6 text-tertiary  cursor-pointer`} />
            </SheetTrigger>
            <SheetContent side="right" className="bg-tertiary text-text-dark">
              <SheetHeader>
                <SheetTitle>
                  <VisuallyHidden>Mobile Navigation</VisuallyHidden>
                </SheetTitle>
              </SheetHeader>

              <nav className="mt-8 flex flex-col gap-6 items-center text-center">
                {navbar.menu.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <Button
                      variant="link"
                      className={`${
                        pathname === item.href
                          ? "text-accent underline"
                          : "text-text-dark"
                      } transition-all duration-300 pl-0`}
                    >
                      {item.name}
                    </Button>
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
