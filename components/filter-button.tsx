import { ChevronDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const FilterButton = () => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-muted-foreground">Ordernar por:</span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="py-1.5 px-3 bg-gray-100 text-xs font-light rounded-md flex items-center gap-2 cursor-pointer">
            <span>Mês</span>
            <ChevronDown size={14} />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>
            <div className="text-xs">Dia</div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div className="text-xs">Ano</div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default FilterButton;
