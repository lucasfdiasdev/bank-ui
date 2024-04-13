import { Bell, Eye } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import UserButton from "@/components/user-button";
import SidebarMobile from "@/components/sidebar-mobile";

const Header = () => {
  return (
    <div className="flex items-center p-4 border-b">
      <SidebarMobile />
      <div className="flex w-full gap-4 justify-end">
        <Input className="max-w-fit hidden lg:block" placeholder="Buscar" />
        <div className="flex flex-col border-r">
          <span className="text-xs text-muted-foreground">SALDO</span>
          <div className="flex items-center justify-between w-full">
            <span className="text-sm font-semibold mr-12">R$ 0,00</span>
            <span className="mr-4">
              <Eye size={20} className="cursor-pointer text-orange-500" />
            </span>
          </div>
        </div>
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
