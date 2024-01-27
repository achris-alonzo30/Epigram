"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { ArrowLeft } from "lucide-react";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function GlobalError ({ error, reset }: ErrorProps) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <section className="">
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
            <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700" onClick={handleBack}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span>Go back</span>
            </button>

            <button className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600" >
                <Link href="/">
                  Take me home  
                </Link>
              
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
