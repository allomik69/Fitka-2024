import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import arrow from "../../../public/arrow-onboarding.svg";
import Image from 'next/image';

export const metadata: Metadata = {
    title: "Onboarding 3",
    description: "Welcome to onbarding.",
  };
  
  export default function OnboardingThird() {
    return (
      <main className=" flex flex-col items-center">
      <div className="flex-start mt-[2%] ">
      <h2 className="text-xl font-semibold">Krok 3/3</h2>
      <h1 className="mt-5 text-3xl  font-semibold">Úspešne ste dokončili onboarding!</h1>
      <div className="flex flex-col ml-[20%] ">
      <h2 className="mt-8 mb-[5px]">Tu je váš link</h2>
      <a className="text-base text-[#B6B6B6] bg-[#151515] pt-1 pb-1 pl-2 pr-2 w-[17rem] border rounded-[5px] " href="https://www.slavia.fitka.com/buy">https://www.slavia.fitka.com/buy</a>
      <h1 className="mt-16 text-3xl  font-light">Čo ďalej?</h1>
      <h3 className="mt-3">1. Pridajte link na stránku Vášho fitka <br />
      2. Začnite predávať!</h3>
      </div>
      </div>
      <div className="">
      <Button className=" w-[300px] mt-3" variant={"onboarding"}>
      Pokračovať do aplikácie
            <Image src={arrow} width={25} height={25} alt="arrow"/>  
        </Button>
      </div>
    </main>
    );
  }
  
      
  