"use client";

import Link from "next/link";

import { SidebarLinks } from "@/lib/map-links";

import { ButtonRotatingBackgroundGradient } from "@/components/animated-ui/button-rotating-background-gradient";

export const Leftbar = () => {
  // TODO: Add isActive highlight for the links

  // TODO: Hide the

  return (
    <aside className="fixed hidden md:flex flex-col w-64 h-full px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-slate-900 dark:border-slate-700 z-[50]">
      <div className="flex flex-col justify-between flex-1 mt-8">
        <nav className="flex flex-col">
          {SidebarLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center px-4 py-2 mt-5 text-gray-500 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            >
              <link.icon className="w-5 h-5" />
              <span className="mx-4 font-medium">{link.name}</span>


            </Link>
          ))}
          </nav>
          <ButtonRotatingBackgroundGradient>
            <Link href="/">Send Feedback</Link>
          </ButtonRotatingBackgroundGradient>
      </div>
    </aside>
  );
};
