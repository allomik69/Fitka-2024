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
    title: "Onboarding",
    description: "Welcome to onbarding.",
  };
  
  export default function OnboardingSecond() {
    return (
      <main className=" flex flex-col items-center">
      <div className="flex-start mt-[5%]">
      <h2 className="text-3xl font-semibold">Krok 2/3</h2>
      <h1 className="mt-8 text-5xl  font-semibold">Nový produkt</h1>
      <h2 className="mt-5 mb-1">Meno</h2>
     <Input placeholder="Vstup"/> 
      <h5 className="mt-1  text-base text-slate-500">Zadajte meno Vášho plánu</h5>
      <h2 className="mt-3 mb-1">Popis</h2>
     <Input placeholder="Jednorázový vstup"/> 
      <h5 className="mt-1  text-base text-slate-500">Zadajte meno Vášho plánu</h5>
      <h2 className="mt-3 mb-1">Doba platnosti</h2>
      <div>
          <Input placeholder="Jednorázový vstup"/> 
          <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
    </div>
      <h5 className="mt-1  text-base text-slate-500">Zadajte meno Vášho plánu</h5>
      </div>
    </main>
    );
  }
  
      
  