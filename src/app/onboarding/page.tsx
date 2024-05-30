import arrow from "../../../public/arrow-onboarding.svg";

import { Metadata } from "next";
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Input}  from "@/components/ui/input";

export const metadata: Metadata = {
    title: "Onboarding",
    description: "Welcome to onbarding.",
  };
  
  export default function Onboarding() {
    return (
      <main className=" flex flex-col items-center">
        <div className="flex-start mt-[5%]">
        <h2 className="text-3xl font-semibold">Krok 1/3</h2>
        <h1 className="mt-8 text-5xl  font-semibold">Onboarding</h1>
        <h5 className="mt-1 text-base text-zinc-400 font-light">Prosím vyplnte potrebné údaje</h5>
        <h2 className="mt-5 mb-1">Meno</h2>
       <Input className="w-[20rem] h-10" placeholder="Meno vašho fitness centra"/> 
        <h5 className="mt-1  text-base text-slate-500">Zadajte meno Vášho fitness centra</h5>
          <Button variant={"onboarding"}>
          Pokračovať 
            <Image src={arrow} width={25} height={25} alt="arrow"/>  
        </Button>
        </div>
      </main>
    );
  }
  
      
  