import userIcon from "../../../public/profile-pic.png";
import { Button } from "@/components/ui/button"
import Image from 'next/image';

export function Navbar() {
  return (
   <nav className="h-28 flex flex-row  items-center border-b border-white border-opacity-25 ">
    <Button className="ml-[10%] flex items-center justify-center h-12 w-36" variant={"outline"}>Slavia Gym</Button>
    <a href="" className="mr-4 ml-[5%] text-2xl text-[#a2a2a2] hover:text-white">Prehľad</a>
    <a href="" className="mr-4 ml-4 text-2xl text-[#a2a2a2] hover:text-white">Zákazníci</a>
    <a href="" className="mr-4 ml-4 text-2xl text-[#a2a2a2] hover:text-white">Produkty</a>
    <a href="" className="mr-4 ml-4 text-2xl text-[#a2a2a2] hover:text-white">Nastavenia</a>
      <Image
          className="ml-[35%]"
          src={userIcon}
          width={43}
          height={43}
          alt="Logo Fitka"
      />
      <h3 className="ml-1">Jim Jones</h3>
   </nav>
  );
}