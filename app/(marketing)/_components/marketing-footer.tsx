import Link from "next/link";

import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

import { Logo } from "@/components/logo";
import { Separator } from "@/components/ui/separator";

export const MarketingFooter = () => {
  return (
    <footer className="my-3 border-t border-slate-200 md:my-5 dark:border-slate-700">
      <div className="container px-6 py-8 mx-auto">
        <div className="flex flex-col items-center text-center">
          <Logo />
        </div>

        <div className="flex flex-wrap justify-center mt-6 gap-x-3  ">
          <Link
            href="/"
            className="text-sm text-slate-600 transition-colrs duration-300 hover:text-[#7600FF]/70 dark:text-slate-300 dark:hover:text-[#7600FF]/90"
          >
            Home
          </Link>
          <Link
            href="/"
            className="text-sm text-slate-600 transition-colrs duration-300 hover:text-[#7600FF]/70 dark:text-slate-300 dark:hover:text-[#7600FF]/90"
          >
            About
          </Link>
          <Link
            href="/"
            className="text-sm text-slate-600 transition-colrs duration-300 hover:text-[#7600FF]/70 dark:text-slate-300 dark:hover:text-[#7600FF]/90"
          >
            Features
          </Link>
          <Link
            href="/"
            className="text-sm text-slate-600 transition-colrs duration-300 hover:text-[#7600FF]/70 dark:text-slate-300 dark:hover:text-[#7600FF]/90"
          >
            Privacy
          </Link>
        </div>
      </div>

      <Separator className="my-3 border-slate-200 md:my-5 dark:border-slate-700" />

      <div className="flex flex-col items-center sm:flex-row sm:justify-between px-6 pb-4">
        <p className="text-sm text-slate-500 dark:text-slate-300">
          © 2023. All rights reserved - Design by{" "}
          <strong className="inline-flex animate-text-gradient bg-gradient-to-r from-[#FFA0A0] via-[#7600FF] to-[#c7d2fe] bg-[240%_auto] bg-clip-text text-sm font-extrabold text-transparent">
            Lonzo Chris
          </strong>
        </p>

        <div className="flex -mx-2 mt-2">
          <Link
            href="#"
            className="mx-2 text-slate-600 transition-colors duration-300 dark:text-slate-300 hover:text-[#7600FF]/70 dark:hover:text-[#7600FF]/60"
          >
            <LinkedInLogoIcon className="w-5 h-5" />
          </Link>
          <Link
            href="#"
            className="mx-2 text-slate-600 transition-colors duration-300 dark:text-slate-300 hover:text-[#7600FF]/70 dark:hover:text-[#7600FF]/60"
          >
            <GitHubLogoIcon className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
};
