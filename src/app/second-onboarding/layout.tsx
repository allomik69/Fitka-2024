import { Navbar} from "@/components/onboarding-navbar/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
        <Navbar/>
      {children}
    </div>
  );
}
