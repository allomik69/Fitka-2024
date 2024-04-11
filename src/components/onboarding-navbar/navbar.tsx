import fitkoIcon from "../../../public/fitko-icon.svg";
import userIcon from "../../../public/profile-pic.png";

import Image from 'next/image';

export function Navbar() {
  return (
   <nav className="fixed z-50 w-full  h-24 flex flex-row items-center bg-">
    <Image
          className="lg:ml-[5%] sm:ml-[1%] md:ml-[1%]"
          src={fitkoIcon}
          width={75}
          alt="Logo Fitka"
      />
      <Image
          className="lg:ml-[70%] sm:ml-[70%] md:ml-[70%]"
          src={userIcon}
          width={43}
          height={43}
          alt="Logo Fitka"
      />
      <h3 className="ml-1">Jim Jones</h3>
   </nav>
  );
}