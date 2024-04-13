"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

import {
  BarChart,
  Code,
  DollarSign,
  Headphones,
  Settings,
  UserPlus,
} from "lucide-react";
import Link from "next/link";

interface MobileNavProps {
  onClose: () => void;
}

const MobileMenu: React.FC<MobileNavProps> = ({ onClose }) => {
  const handleClick = () => {
    onClose();
  };
  return (
    <div className="mt-7 w-screen h-screen bg-white px-4 items-center justify-center absolute right-0 xl:hidden">
      <Accordion
        defaultValue={"item-1"}
        className="pl-2 overflow-y-scroll"
        type="single"
        collapsible
      >
        <AccordionItem className="mt-6 border-b border-t" value="item-1">
          <AccordionTrigger>Use Cases</AccordionTrigger>
          <AccordionContent defaultValue={"item-1"} className="space-y-2">
            <Link className="flex" href="/ecommerce" onClick={handleClick}>
              <div>
                <BarChart className="h-7 w-7 mr-4 text-orange-400" />
              </div>
              <div>Marketing</div>
            </Link>
            <Link className="flex" href="/ecommerce" onClick={handleClick}>
              <div>
                <Code className="h-7 w-7 mr-4 text-purple-400" />
              </div>
              <div>Engineering</div>
            </Link>
            <Link className="flex" href="/ecommerce" onClick={handleClick}>
              <div>
                <DollarSign className="h-7 w-7 mr-4 text-green-400" />
              </div>
              <div>Sales</div>
            </Link>
            <Link className="flex" href="/ecommerce" onClick={handleClick}>
              <div>
                <UserPlus className="h-7 w-7 mr-4 text-yellow-400" />
              </div>
              <div>Team Management</div>
            </Link>
            <Link className="flex" href="/ecommerce" onClick={handleClick}>
              <div>
                <Settings className="h-7 w-7 mr-4 text-black" />
              </div>
              <div>Team Management</div>
            </Link>
            <Link className="flex" href="/ecommerce" onClick={handleClick}>
              <div>
                <Headphones className="h-7 w-7 mr-4 text-blue-400" />
              </div>
              <div>Support</div>
            </Link>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem className="mt-6 border-b" value="item-2">
          <AccordionTrigger>For Business</AccordionTrigger>
          <AccordionContent className="space-y-2">
            <Link className="flex" href="/ecommerce" onClick={handleClick}>
              <div>
                <BarChart className="h-7 w-7 mr-4 text-orange-400" />
              </div>
              <div>Marketing</div>
            </Link>
            <Link className="flex" href="/ecommerce" onClick={handleClick}>
              <div>
                <Code className="h-7 w-7 mr-4 text-purple-400" />
              </div>
              <div>Engineering</div>
            </Link>
            <Link className="flex" href="/ecommerce" onClick={handleClick}>
              <div>
                <DollarSign className="h-7 w-7 mr-4 text-green-400" />
              </div>
              <div>Sales</div>
            </Link>
            <Link className="flex" href="/ecommerce" onClick={handleClick}>
              <div>
                <UserPlus className="h-7 w-7 mr-4 text-yellow-400" />
              </div>
              <div>Team Management</div>
            </Link>
            <Link className="flex" href="/ecommerce" onClick={handleClick}>
              <div>
                <Settings className="h-7 w-7 mr-4 text-black" />
              </div>
              <div>Team Management</div>
            </Link>
            <Link className="flex" href="/ecommerce" onClick={handleClick}>
              <div>
                <Headphones className="h-7 w-7 mr-4 text-blue-400" />
              </div>
              <div>Support</div>
            </Link>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem className="mt-6 border-b" value="item-3">
          <AccordionTrigger>Resources</AccordionTrigger>
          <AccordionContent className="space-y-2">
            <Link className="flex" href="/ecommerce" onClick={handleClick}>
              <div>
                <BarChart className="h-7 w-7 mr-4 text-orange-400" />
              </div>
              <div>Marketing</div>
            </Link>
            <Link className="flex" href="/ecommerce" onClick={handleClick}>
              <div>
                <Code className="h-7 w-7 mr-4 text-purple-400" />
              </div>
              <div>Engineering</div>
            </Link>
            <Link className="flex" href="/ecommerce" onClick={handleClick}>
              <div>
                <DollarSign className="h-7 w-7 mr-4 text-green-400" />
              </div>
              <div>Sales</div>
            </Link>
            <Link className="flex" href="/ecommerce" onClick={handleClick}>
              <div>
                <UserPlus className="h-7 w-7 mr-4 text-yellow-400" />
              </div>
              <div>Team Management</div>
            </Link>
            <Link className="flex" href="/ecommerce" onClick={handleClick}>
              <div>
                <Settings className="h-7 w-7 mr-4 text-black" />
              </div>
              <div>Team Management</div>
            </Link>
            <Link className="flex" href="/ecommerce" onClick={handleClick}>
              <div>
                <Headphones className="h-7 w-7 mr-4 text-blue-400" />
              </div>
              <div>Support</div>
            </Link>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem className="mt-6 border-b" value="item-4">
          <AccordionTrigger>Company</AccordionTrigger>
          <AccordionContent className="space-y-2">
            <Link className="flex" href="/ecommerce" onClick={handleClick}>
              <div>
                <BarChart className="h-7 w-7 mr-4 text-orange-400" />
              </div>
              <div>Marketing</div>
            </Link>
            <Link className="flex" href="/ecommerce" onClick={handleClick}>
              <div>
                <Code className="h-7 w-7 mr-4 text-purple-400" />
              </div>
              <div>Engineering</div>
            </Link>
            <Link className="flex" href="/ecommerce" onClick={handleClick}>
              <div>
                <DollarSign className="h-7 w-7 mr-4 text-green-400" />
              </div>
              <div>Sales</div>
            </Link>
            <Link className="flex" href="/ecommerce" onClick={handleClick}>
              <div>
                <UserPlus className="h-7 w-7 mr-4 text-yellow-400" />
              </div>
              <div>Team Management</div>
            </Link>
            <Link className="flex" href="/ecommerce" onClick={handleClick}>
              <div>
                <Settings className="h-7 w-7 mr-4 text-black" />
              </div>
              <div>Team Management</div>
            </Link>
            <Link className="flex" href="/ecommerce" onClick={handleClick}>
              <div>
                <Headphones className="h-7 w-7 mr-4 text-blue-400" />
              </div>
              <div>Support</div>
            </Link>
          </AccordionContent>
        </AccordionItem>
        <Link
          className="flex flex-1 items-center justify-between py-4 border-b mt-6"
          href={"/"}
        >
          Pricing
        </Link>
        <Link
          className="flex flex-1 items-center justify-between py-4 border-b mt-6"
          href={"/contact-sales"}
        >
          Request a demo
        </Link>
      </Accordion>

      <div className="pt-12">
        <div className="space-y-4 px-4 flex flex-col">
          <Button className="w-full">Get Botion Free</Button>
        </div>
        <div className="space-y-4 px-4 mt-4 flex flex-col">
          <Button variant={"outline"} className="w-full">
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
