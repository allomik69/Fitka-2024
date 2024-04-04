import { ModeToggle } from "@/components/theme-toggler";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav className="pt-2 px-4 flex justify-end">
        <ModeToggle />
      </nav>
      {children}
    </div>
  );
}
