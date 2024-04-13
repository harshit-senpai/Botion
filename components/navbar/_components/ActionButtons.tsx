"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

import { X, AlignJustify } from "lucide-react";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

const ActionButtons = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="pr-2">
      <div className="flex items-center justify-center">
        <div className="flex xl:space-x-4">
          <Link href="/contact-sales" className="hidden xl:flex items-center">
            Request a Demo
          </Link>
          <div className="text-gray-300 font-thin lg:flex hidden items-center">
            |
          </div>

          <div className="flex lg:space-x-4 items-center pr-4">
            <div>
              <Button
                variant={"outline"}
                className="hidden xl:flex items-center border-none text-md"
              >
                Log In
              </Button>
            </div>
            <div>
              <Button className="hidden xl:flex items-center border-none text-md font-semibold text-sm">
                Get Botion Free
              </Button>
            </div>
          </div>
          {isOpen ? (
            <div
              className="flex xl:hidden items-center justify-center"
              onClick={toggleOpen}
            >
              <X className="h-5 w-5 " />
            </div>
          ) : (
            <div
              className="flex xl:hidden items-center justify-center"
              onClick={toggleOpen}
            >
              <AlignJustify className="h-7 w-7 " />{" "}
            </div>
          )}
          {isOpen && (
              <MobileMenu onClose={toggleOpen} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ActionButtons;
