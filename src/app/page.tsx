import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex font-sans flex-col justify-center items-center h-screen">
      <SignedOut>
        <Button variant={"outline"} className="px-10 py-2 border-primary">
          <Link href="/login">Login</Link>
        </Button>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </main>
  );
}
