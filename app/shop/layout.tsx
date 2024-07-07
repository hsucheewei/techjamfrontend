import { BottomNav } from "@/components/bottom-nav";
import { Sidebar } from "@/components/sidebar";
import { Tab } from "@/components/tab";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="mb-16">
        <Tab />
        <Sidebar />
        <div className="mt-24 mb-12 w-full"> 
        {children}
        </div>
        <BottomNav />
      </div>
    );
  }
  