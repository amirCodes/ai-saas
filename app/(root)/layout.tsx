import LeftSidbar from "@/components/LeftSidbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex flex-col">
      <main className="relative flex bg-black-3">
        <LeftSidbar />
        <div>{children}</div>
        <div>Right nav bar</div>
      </main>
    </div>
  );
}
