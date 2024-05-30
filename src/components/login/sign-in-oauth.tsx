"use client";
import { useSignIn } from "@clerk/nextjs";
import { OAuthStrategy } from "@clerk/types";
import { Button } from "../ui/button";
import { Icons } from "../icons";

export default function SignInOAuthButtons() {
  const { signIn } = useSignIn();

  const signInWith = (strategy: OAuthStrategy) => {
    return signIn?.authenticateWithRedirect({
      strategy,
      redirectUrl: "/sso-callback",
      redirectUrlComplete: "/",
    });
  };

  // Render a button for each supported OAuth provider
  // you want to add to your app
  return (
    <Button
      variant="outline"
      type="button"
      className="border-primary"
      onClick={() => signInWith("oauth_google")}
    >
      <Icons.google className="w-4 h-4 mr-2" />
      Sign in with Google
    </Button>
  );
}
