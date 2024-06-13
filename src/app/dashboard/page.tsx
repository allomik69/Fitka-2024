// app/dashboard/page.js or wherever your main Dashboard component is located
import { Metadata } from "next";
import coins from "../../../public/grommet-icons_money.svg"; 
import people from "../../../public/people.svg"; 
import clock from "../../../public/clock.svg"; 
import Image from 'next/image';
import userIcon from "../../../public/profile-pic.png";
import { Button } from "@/components/ui/button";
import { Input}  from "@/components/ui/input";
import { DatePickerWithRange } from "@/components/ui/date-range";
import dynamic from 'next/dynamic';

// Dynamically import the LineChart component with no SSR (Server Side Rendering)
const LineChart = dynamic(() => import('@/components/line-chart/chart'), { ssr: false });

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Welcome to dashboard.",
  };

export default function Dashboard() {
  return (
    <main className="mt-10 ml-10">
        <div className="flex flex-row justify">
            <h1 className=" text-3xl  font-semibold">Hlavný panel</h1>
            <div className="flex flex-row ml-[60%] mt-2">
                <DatePickerWithRange className=""/>
                <Button className="bg-white hover:bg-slate-200 ml-2">Download</Button>
            </div>
        </div>
        <div className="pl-[6%]">
        <section className="mt-20 flex-row flex gap-x-10">
        <div className="w-[30rem] h-[12rem] bg-black bg-opacity-30 rounded-[10px] border-white border-opacity-25 border pl-8 pt-5 pr-8 pb-5">
            <h3 className="text-2xl font-semibold">Tržby</h3>
            <h1 className="text-5xl text-lime-300 mt-3">€10,255.80</h1>
            <p className="mt-4 text-opacity-70  text-white absolute">+20.1%  z minulého mesiaca</p>
            <Image src={coins} width={25} height={25} alt="coins" className="relative left-[85%] bottom-[40%]"/>  
        </div>
        <div className="w-[30rem] h-[12rem] bg-black bg-opacity-30 rounded-[10px] border-white border-opacity-25 border pl-8 pt-5 pr-8 pb-5">
            <h3 className="text-2xl font-semibold">Permanentky</h3>
            <h1 className="text-5xl text-red-300 mt-3">-31</h1>
            <p className="mt-4 text-opacity-70  text-white absolute">-56%  z minulého mesiaca</p>
            <Image src={people} width={25} height={25} alt="coins" className="relative left-[85%] bottom-[40%]"/>  
        </div>
        <div className="w-[30rem] h-[12rem] bg-black bg-opacity-30 rounded-[10px] border-white border-opacity-25 border pl-8 pt-5 pr-8 pb-5">
            <h3 className="text-2xl font-semibold">Vstupy</h3>
            <h1 className="text-5xl text-lime-300 mt-3">+120</h1>
            <p className="mt-4 text-opacity-70  text-white absolute">+255%  z minulého mesiaca</p>
            <Image src={clock} width={25} height={25} alt="coins" className="relative left-[85%] bottom-[40%]"/>  
        </div>
        </section>
        <div className="mt-4 w-[35%] h-[20rem] bg-black bg-opacity-50 rounded-[10px] border-white border-opacity-25 border pl-8 pt-5 pr-8 pb-5">
        <h3 className="text-2xl font-semibold">Recent Sales</h3>
            <p className="mt-2 text-opacity-85  text-white pb-5">You made 265 sales this month.</p>
            <div className="flex flex-start mt-2 mb-4">
                <Image
                className=""
                src={userIcon}
                width={50}
                height={50}
                alt="Logo Fitka"
                />
                <div className="text-xl ml-4 flex flex-row ">
                    <div className="flex flex-col">
                    <h2 className="text-base">Olivia Martin</h2>
                    <h2 className="text-sm text-white text-opacity-60">olivia.martin@gmail.com</h2>
                    </div>
                    <h3 className="ml-52 mt-2">+€35.00</h3>
                </div>
            </div>
            <div className="flex flex-start mt-2 mb-4">
                <Image
                className=""
                src={userIcon}
                width={50}
                height={50}
                alt="Logo Fitka"
                />
                <div className="text-xl ml-4 flex flex-row ">
                    <div className="flex flex-col">
                    <h2 className="text-base">Olivia Martin</h2>
                    <h2 className="text-sm text-white text-opacity-60">olivia.martin@gmail.com</h2>
                    </div>
                    <h3 className="ml-52 mt-2">+€35.00</h3>
                </div>
            </div>
            <div className="flex flex-start mt-2 mb-4 relative">
                <Image
                className=""
                src={userIcon}
                width={50}
                height={50}
                alt="Logo Fitka"
                />
                <div className="text-xl ml-4 flex flex-row ">
                    <div className="flex flex-col">
                    <h2 className="text-base">Olivia Martin</h2>
                    <h2 className="text-sm text-white text-opacity-60">olivia.martin@gmail.com</h2>
                    </div>
                    <h3 className="ml-52 mt-2">+€35.00</h3>
                </div>
            </div>
             <div className="absolute  left-[47%] bottom-[13%] w-[35%] h-[20rem] bg-black bg-opacity-60 rounded-[10px] border-white border-opacity-25 border" id="myChart">
                    <LineChart />
                </div>
        </div>
        </div>
    </main>
  );
}
