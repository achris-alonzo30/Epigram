import Link from "next/link";

import { 
    GitHubLogoIcon, 
    LinkedInLogoIcon 
} from "@radix-ui/react-icons";

import { Logo } from "@/components/logo";
import { getYear } from "@/lib/get-year";
import { Separator } from "@/components/ui/separator";
import { TextGradient } from "@/components/animated-ui/text-gradient";

export const Footer = () => {
  const year = getYear();
  return (
    <footer className="my-3 border-t border-slate-200 md:my-5 dark:border-slate-700">
      <div className="flex flex-col items-center justify-center px-6 py-4 mx-auto">
        <Logo />

        <div className="flex flex-wrap justify-center mt-6 gap-x-3">
          <Link
            href="/"
            className="text-sm text-zinc-600 transition-colrs duration-300 hover:text-[#7600FF]/70 dark:text-zinc-300 dark:hover:text-[#7600FF]/90"
          >
            Home
          </Link>
          <Link
            href="/"
            className="text-sm text-zinc-600 transition-colrs duration-300 hover:text-[#7600FF]/70 dark:text-zinc-300 dark:hover:text-[#7600FF]/90"
          >
            About
          </Link>
          <Link
            href="/"
            className="text-sm text-zinc-600 transition-colrs duration-300 hover:text-[#7600FF]/70 dark:text-zinc-300 dark:hover:text-[#7600FF]/90"
          >
            Features
          </Link>
          <Link
            href="/"
            className="text-sm text-zinc-600 transition-colrs duration-300 hover:text-[#7600FF]/70 dark:text-zinc-300 dark:hover:text-[#7600FF]/90"
          >
            Privacy
          </Link>
        </div>
      
      </div>
      <Separator className="w-full my-3 border-slate-200 md:my-5 dark:border-slate-700" />

        <div className="flex flex-col items-center  space-y-2 px-6 pb-4">
            <p className=" text-base text-zinc-500 dark:text-zinc-300">
              © {year} - Design by{" "}
              <TextGradient fontSize={["text-base"]} fontStyle="font-extrabold">
                Lonzo Chris
              </TextGradient>
            </p>

            <div className="flex items-center">
              <Link
                href="#"
                className="mx-2 text-zinc-600 transition-colors duration-300 dark:text-zinc-300 hover:text-[#7600FF]/70 dark:hover:text-[#7600FF]/60"
              >
                <LinkedInLogoIcon className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="mx-2 text-zinc-600 transition-colors duration-300 dark:text-zinc-300 hover:text-[#7600FF]/70 dark:hover:text-[#7600FF]/60"
              >
                <GitHubLogoIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
    </footer>
  );
};