import { BottomNav } from "@/components/bottom-nav";
import { Siderbar } from "@/components/sidebar";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="mb-16">
        <Siderbar />
        {children}
        <BottomNav />
      </div>
    );
  }
  