import { Button } from "@/components/ui/button";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="flex font-sans flex-col justify-center items-center h-screen">
      <SignedIn>
        <h1>Home</h1>
        <p>Welcome back!</p>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <h1>Home</h1>
        <p>Sign in to continue</p>
        <div className="mt-5">
          <SignInButton>
            <Button>Sign in</Button>
          </SignInButton>
        </div>
      </SignedOut>
    </main>
  );
}
