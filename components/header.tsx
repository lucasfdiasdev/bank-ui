import { Bell } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import UserButton from "@/components/user-button";
import SidebarMobile from "@/components/sidebar-mobile";

const Header = () => {
  return (
    <div className="flex items-center p-4 border-b">
      <SidebarMobile />
      <div className="flex w-full gap-4 justify-end">
        <Input className="max-w-fit hidden md:block" placeholder="Buscar" />
        <div className="relative">
          <Button variant={"outline"} size={"icon"}>
            <Bell />
          </Button>
          <div className="absolute flex items-center justify-center text-xs font-bold -top-3 -right-3 h-5 w-5 bg-orange-500 rounded-md text-white">
            2
          </div>
        </div>
        <UserButton />
      </div>
    </div>
  );
};

export default Header;
