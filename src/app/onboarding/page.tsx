import { Metadata } from "next";
import { Navbar} from "@/components/onboarding-navbar/navbar";
 
export const metadata: Metadata = {
    title: "Onboarding",
    description: "Welcome to onbarding.",
  };
  
  export default function Onboarding() {
    return (
      <main className="">
        <Navbar/>
      </main>
    );
  }
  