import { Button } from "@/components/ui/button";
import Link from "next/link";

const ActionButtons = () => {
  return (
    <div className="pr-2">
      <div className="flex items-center justify-center">
        <div className="flex xl:space-x-4">
          <Link href="/contact-sales" className="hidden lg:flex items-center">
            Request a Demo
          </Link>
          <div className="text-gray-300 font-thin lg:flex hidden items-center">
            |
          </div>

          <div className="flex lg:space-x-4 items-center pr-4">
            <div>
              <Button
                variant={"outline"}
                className="hidden lg:flex items-center border-none text-md"
              >
                Log In
              </Button>
            </div>
            <div>
              <Button className="hidden lg:flex items-center border-none text-md font-semibold text-sm">
                Get Botion Free
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionButtons;
