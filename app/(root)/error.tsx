"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

type ErrorProps = {
  error: Error;
  reset: () => void
};

export default function GlobalError ({ error, reset }: ErrorProps) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <section className="relative h-full w-full bg-zinc-100 dark:bg-zinc-950  ">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_2px,transparent_2px),linear-gradient(to_bottom,#4f4f4f2e_2px,transparent_0px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_100%_at_50%_0%,#000_70%,transparent_100%)]">
      <div className="container flex items-center justify-center text-center min-h-screen px-6 py-12 mx-auto">
        <div>
          <p className="text-8xl font-semibold text-[#7600FF]">
            404 Error
          </p>
          <h1 className="mt-3 text-xl font-semibold text-gray-800 dark:text-white md:text-2xl">
            Something Went Wrong!
          </h1>
          <p className="mt-4 text-muted-foreground">
            {error.message}
          </p>
          <div className="flex items-center justify-center mt-6 gap-x-3">
            <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-zinc-800 dark:bg-zinc-900 hover:bg-zinc-100 dark:text-gray-200 dark:border-gray-700" onClick={handleBack}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span>Go back</span>
            </button>
            <button className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-[#7600FF] rounded-lg shrink-0 sm:w-auto hover:bg-[#7600FF]/70 dark:hover:bg-[#7600FF]/60 dark:bg-[#7600FF]/70" onClick={reset} >
                Reset  
            </button>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};
