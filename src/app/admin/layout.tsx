/* eslint-disable react/no-children-prop */
"use client";

// import SidebarAdmin from "@/components/sidebar-admin";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/sidebar-admin";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { NAV_SIDEBAR_TOP_ADMIN } from "@/const/admin";
import { LogOut } from "lucide-react";


const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};


const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        AntiSCM
      </motion.span>
    </Link>
  );
};

const Dashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-1 flex-col">
      <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full overflow-y-auto">
        <div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [open, setOpen] = useState(false);
  return (
    <div className="h-screen fixed w-full">
      <div
        className={cn(
          "rounded-md flex flex-col justify-center md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 max-w-full mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
          "h-full"
        )}
      >
        <Sidebar open={open} setOpen={setOpen}>
          <SidebarBody className="justify-between gap-10">
            <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
              {open ? <Logo /> : <LogoIcon />}
              <div className="mt-8 flex flex-col gap-3 font-medium">
                {NAV_SIDEBAR_TOP_ADMIN.map((link, idx) => (
                  <SidebarLink key={idx} link={link} />
                ))}
              </div>
            </div>
            <div className="border-t border-gray-300 w-full flex flex-col gap-y-3 py-2">
              <SidebarLink
                link={{
                  label: "Admin",
                  href: "#",
                  icon: (
                    <Image
                      src="/images/avatar.jpg"
                      className="h-7 w-7 flex-shrink-0 rounded-full"
                      width={50}
                      height={50}
                      alt="Avatar"
                    />
                  ),
                }}
              />
              <SidebarLink
                link={{
                  label: "Đăng xuất",
                  href: "#",
                  icon: (
                    <LogOut className="text-base" strokeWidth={1.5} />
                  ),
                }}
              />
            </div>
          </SidebarBody>
        </Sidebar>
        <Dashboard children={children} />
      </div>
    </div>
  );
}

