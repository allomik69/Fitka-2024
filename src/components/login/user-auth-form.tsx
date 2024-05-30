import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { SignedOut } from "@clerk/nextjs";
import SignInOAuthButtons from "./sign-in-oauth";

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  return (
    <div className={cn("grid gap-2", className)} {...props}>
      <SignedOut>
        <SignInOAuthButtons />
      </SignedOut>
    </div>
  );
}
