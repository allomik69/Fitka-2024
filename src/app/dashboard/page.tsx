import { Metadata } from "next";
import coins from "../../../public/grommet-icons_money.svg"; 
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Input}  from "@/components/ui/input";
import { DatePickerWithRange } from "@/components/ui/date-range";

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Welcome to dashboard.",
  };

  export default function Dashboard() {
    return (
    <main className="mt-10 ml-8">
        <div className="flex flex-row justify">
            <h1 className=" text-3xl  font-semibold">Hlavný panel</h1>
            <div className="flex flex-row ml-[60%] mt-2">
                <DatePickerWithRange className=""/>
                <Button className="bg-white hover:bg-slate-200 ml-2">Download</Button>
            </div>
        </div>
        <section className="mt-20">
        <div className="w-[35rem] h-[13rem] bg-black bg-opacity-30 rounded-[10px] border-white border-opacity-25 border">
            <h3 className="text-2xl font-semibold">Tržby</h3>
            <h1>10,255.80</h1>
            <p>+20.1%  z minulého mesiaca</p>
            <Image src={coins} width={25} height={25} alt="coins"/>  
        </div>
        </section>
    </main>
    );
  }
  
      
  