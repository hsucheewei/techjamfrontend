import { BottomNav } from "@/components/bottom-nav";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div>
        {children}
        <BottomNav />
      </div>
    );
  }
  