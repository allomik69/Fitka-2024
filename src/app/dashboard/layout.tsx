import { Navbar} from "@/components/navbar/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" bg-gradient-to-r from-[#090D22] via-[#161e46] to-[#090D22] h-screen w-screen">
        <Navbar/>
      {children}
    </div>
  );
}
