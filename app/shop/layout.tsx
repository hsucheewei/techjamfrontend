import { BottomNav } from "@/components/bottom-nav";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="mb-16">
        {children}
        <BottomNav />
      </div>
    );
  }
  