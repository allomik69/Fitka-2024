import { Metadata } from "next";
import arrow from "../../../public/arrow-onboarding.svg";
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Input}  from "@/components/ui/input";

export const metadata: Metadata = {
    title: "Settings",
    description: "Welcome to settings.",
  };

  export default function Settings() {
    return (
      <div>
      <div className="ml-[10%] mt-[3%] mr-[10%] mb-[3%] relative ">
      <div className=" opacity-[60%] top-[30%] left-[35%] absolute w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#F6970A] via-[#8F5FCD] to-[#E916FB] blur-[100px]"></div>
        <h1 className="mt-8 text-5xl  font-semibold">Nastavenia</h1>
        <h3 className="mt-4 text-xl text-zinc-300 font-light">Donastavujte si váš účet.</h3>
        <div className="mt-4 w-[100%] h-[1px] bg-white opacity-30"></div>
        <div className="flex items-center flex-col mt-16">
          <div className="flex-start">
            <h2 className="mt-5 mb-1">Meno</h2>
            <Input className="w-[20rem] h-10" placeholder="PainGym"/> 
            <h5 className="mt-1  text-base text-slate-500">Zadajte meno Vášho fitka</h5>
          </div>
          <div className="flex-start">
            <h2 className="mt-5 mb-1">IBAN</h2>
            <Input className="w-[20rem] h-10" placeholder="SK 9500 0000 0000 0000 0000"/> 
            <h5 className="mt-1  text-base text-slate-500">Zadajte platný iban</h5>
          </div>
          <div className="flex-start">
            <h2 className="mt-5 mb-1">Frekvencia vyplácania</h2>
            <Input className="w-[20rem] h-10" placeholder="Každý mesiac (1.)"/> 
            <h5 className="mt-1  text-base text-slate-500">Vyberte jednu z možností</h5>
            <Button className=" w-full flex items-center justify-center" variant={"onboarding"}>Uložiť
              <Image  className='ml-2' src={arrow} width={25} height={25} alt="arrow"/>  
          </Button>
          </div>
        </div>
      </div>
     </div>
    );
  }
  
      
  