import AdminSidebar from "@/components/admin-sidebar";
import HeaderSidebar from "@/components/header-sidebar";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="px-4 h-[100vh] bg-[#edeef7] flex items-center">
      <div className="w-full h-[95vh] bg-white rounded-lg shadow-box-admin relative">
        <div className="flex items-start h-full">
          <section className="w-[20%] h-full border-r">
            <AdminSidebar />
          </section>
          <main className="flex-1 relative w-full min-h-full h-full overflow-hidden">
            <div className="w-full">
              <div className="mx-auto px-4 h-[60px] flex items-center justify-between">
                <HeaderSidebar />
              </div>
              <div className="border-t w-full h-full overflow-y-auto scrollbar-admin">
                <section className="">{children}</section>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
