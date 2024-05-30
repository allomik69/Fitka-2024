import arrow from "../../../public/arrow-onboarding.svg";


import { Metadata } from "next";
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Input}  from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export const metadata: Metadata = {
    title: "Onboarding 2",
    description: "Welcome to onbarding.",
  };
  
  export default function OnboardingSecond() {
    return (
      <main className=" flex flex-col items-center">
      <div className="flex-start mt-[2%] ">
      <h2 className="text-xl font-semibold">Krok 2/3</h2>
      <h1 className="mt-5 text-3xl  font-semibold">Nový produkt</h1>
      <h2 className="mt-5 mb-[3px]">Meno</h2>
     <Input placeholder="Vstup"/> 
      <h5 className="mt-[3px]  text-base text-slate-500">Zadajte meno Vášho plánu</h5>
      <h2 className="mt-3 mb-[3px]">Popis</h2>
     <Input placeholder="Jednorázový vstup"/> 
      <h5 className="mt-[3px]  text-base text-slate-500">Zadajte popis Vášho plánu</h5>
      <h2 className="mt-3 mb-[3px]">Doba platnosti</h2>
      <div className="flex flex-row">
          <Input placeholder="1" type="number" className="w-[12rem] mr-2"/> 
          <Select>
        <SelectTrigger className="w-[6rem]">
          <SelectValue placeholder="Deň"/>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">hodín</SelectItem>
          <SelectItem value="dark">dní</SelectItem>
          <SelectItem value="system">mesiacov</SelectItem>
        </SelectContent>
      </Select>
    </div>
      <h5 className="mt-1  text-base text-slate-500">Vyberte jednu z možností</h5>
      <h2 className="mt-3 mb-1">Cena</h2>
     <Input placeholder="zadajte cenu v eurách."/> 
      <h5 className="mt-1  text-base text-slate-500">Zadajte cenu Vášho plánu</h5>
    </div>
    <Button className=" w-[200px]" variant={"onboarding"}>
          Pokračovať 
            <Image src={arrow} width={25} height={25} alt="arrow"/>  
        </Button>
    </main>
    );
  }
  
      
  