import Image from "next/image";

import ChipCard from "@/public/chip.png";
import LogoCard from "@/public/masterlogo.png";

const CardBank = () => {
  return (
    <div className="flex items-center mx-auto justify-center">
      <div className="bg-orange-400 text-white rounded-md p-4 shadow-sm space-y-6 max-w-[400px] w-full">
        <div className="flex items-center justify-between">
          <Image src={ChipCard} alt="card" className="h-10 w-14" />
          <Image src={LogoCard} alt="card" className="h-6 w-10" />
        </div>
        <div className="flex flex-col">
          <span className="text-sm">Dayat Santoso</span>
          <span className="text-xl">**** **** **** 2345</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm">08 / 32</span>
          <span>IBank</span>
        </div>
      </div>
    </div>
  );
};

export default CardBank;
