import Header from "@/components/header";
import Sidebar from "@/components/sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative">
      <div className="hidden h-full lg:flex lg:w-72 lg:flex-col lg:fixed lg:inset-y-0 z-[80] bg-orange-500">
        <Sidebar />
      </div>
      <main className="lg:pl-72">
        <Header />
        {children}
      </main>
    </div>
  );
};

export default Layout;
