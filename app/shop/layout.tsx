import { BottomNav } from "@/components/bottom-nav";
import { Siderbar } from "@/components/sidebar";
import { Tab } from "@/components/tab";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="mb-16">
        <Tab />
        <Siderbar />
        {children}
        <BottomNav />
      </div>
    );
  }
  