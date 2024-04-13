"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Montserrat_Alternates } from "next/font/google";

import {
  Home,
  Store,
  Landmark,
  HandCoins,
  HandHeart,
  TrendingUp,
  CreditCard,
  CircleDollarSign,
} from "lucide-react";

import { cn } from "@/lib/utils";

const montserrat = Montserrat_Alternates({
  weight: "600",
  subsets: ["latin"],
});

const routes = [
  {
    label: "Home",
    icon: Landmark,
    href: "/",
    color: "text-white",
  },
  {
    label: "Conta Digital",
    icon: CircleDollarSign,
    href: "/settings",
  },
  {
    label: "Cartões",
    icon: CreditCard,
    href: "/settings",
  },
  {
    label: "Investimentos",
    icon: TrendingUp,
    href: "/settings",
  },
  {
    label: "Crédito",
    icon: HandCoins,
    href: "/settings",
  },
  {
    label: "Imobilário",
    icon: Home,
    href: "/settings",
  },
  {
    label: "Inter Shop",
    icon: Store,
    href: "/settings",
  },
  {
    label: "Serviços",
    icon: HandHeart,
    href: "/settings",
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-orange-500 text-white">
      <div className="px-3 py-2 flex-1">
        <Link href={"/"} className="flex items-center pl-3 mb-14">
          <Landmark size={32} className="relative mr-4" />
          <h1 className={cn("font-bold text-2xl", montserrat.className)}>
            IBank
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-md transition",
                pathname === route.href
                  ? "text-white bg-white/10"
                  : "text-zinc-400"
              )}
            >
              <div className="flex items-center">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
