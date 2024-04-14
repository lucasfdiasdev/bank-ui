"use client";

import { useEffect, useState } from "react";

import { ChevronRight, Eye } from "lucide-react";

import CardBank from "@/components/home/card-bank";
import { Progress } from "@/components/ui/progress";
import FilterButton from "@/components/filter-button";
import SectionTabs from "@/components/home/section-tabs";

const Home = () => {
  const [creditProgress, setCreditProgress] = useState(1);
  const [onlineCreditProgress, setProgressOnlineCredit] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => setCreditProgress(46), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setProgressOnlineCredit(39), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row">
      <div className="flex-1 p-4 lg:p-8 border-r">
        <div className="space-y-8">
          <CardBank />
          <div className="flex flex-col space-y-8">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground text-sm font-light">
                Total usado
              </span>

              <FilterButton />
            </div>
            <span className="text-4xl font-semibold">R$ 16.088,32</span>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  Cartão Atual
                </span>
                <span className="font-semibold">BRA / BR Real </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  Status do Cartão
                </span>
                <span className="text-green-500 font-semibold">Ativo</span>
              </div>
            </div>
          </div>

          <div className="border flex items-center justify-between p-4 rounded-md">
            <div className="text-xs w-[70%]">
              <Progress
                className="h-2 mb-2 rounded-[2px]"
                value={creditProgress}
              />
              <div className="flex items-center justify-between w-full">
                <span className="mr-4 font-semibold">Limite de crédito</span>
                <span className="text-muted-foreground">
                  R$ 2.200,00 / R$ 5.000,00
                </span>
              </div>
            </div>
            <div className="shadow-sm bg-gray-100 rounded-md p-1">
              <ChevronRight size={20} />
            </div>
          </div>

          <div className="border flex items-center justify-between p-4 rounded-md">
            <div className="text-xs w-[70%]">
              <Progress
                className="h-2 mb-2 rounded-[2px]"
                value={onlineCreditProgress}
              />
              <div className="flex items-center justify-between w-full">
                <span className="mr-4 font-semibold">Online de crédito</span>
                <span className="text-muted-foreground">
                  R$ 2.200,00 / R$ 7.000,00
                </span>
              </div>
            </div>
            <div className="shadow-sm bg-gray-100 rounded-md p-1">
              <ChevronRight size={20} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 p-4 lg:p-8 relative">
        <div className="space-y-8 sticky top-8 ">
          <div className="border-b flex items-center justify-between pb-2">
            <h1 className="text-xl font-semibold">Extrato</h1>
            <ChevronRight className="text-orange-400" />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground">
                Saldo em conta
              </span>
              <span className="text-sm font-semibold">R$ 0,00</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground">
                Em processamento
              </span>
              <span className="text-sm font-semibold">R$ 0,00</span>
            </div>
            <Eye size={20} className="text-orange-400" />
          </div>

          <SectionTabs />
        </div>
      </div>
    </div>
  );
};

export default Home;
