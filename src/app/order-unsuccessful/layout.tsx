import { Navbar} from "@/components/onboarding-navbar/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen">
        <Navbar/>
      {children}
    </div>
  );
}
