"use client";

import { useEffect, useState } from "react";

import { ChevronDown, ChevronRight } from "lucide-react";

import CardBank from "@/components/home/card-bank";
import { Progress } from "@/components/ui/progress";

const Home = () => {
  const [progress, setProgress] = useState(5);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(46), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex-1 p-4 lg:p-8 border-r">
        <div className="space-y-8">
          <CardBank />
          <div className="flex flex-col space-y-8">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground text-sm font-light">
                Total usado
              </span>
              <div className="p-1.5 border text-xs font-light rounded-md flex items-center gap-2">
                <span>Por mês</span>
                <ChevronDown size={14} />
              </div>
            </div>
            <span className="text-4xl font-semibold">R$ 0,00</span>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  Cartão Atual
                </span>
                <span>BRA / BR Real </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  Status do Cartão
                </span>
                <span className="text-green-500 text-sm">Ativo</span>
              </div>
            </div>
          </div>
          <div className="border flex items-center justify-between p-4 rounded-md">
            <div className="text-xs w-[70%]">
              <Progress className="h-2 mb-2" value={progress} />
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
        </div>
      </div>
      <div className="flex-1 p-4 lg:p-8">ola</div>
    </div>
  );
};

export default Home;
