import Link from "next/link";

import { ButtonRotatingBackgroundGradient } from "@/components/button-rotating-background-gradient";

export const MarketingHeros = () => {
  return (
    <div className="relative items-center w-full px-5 pt-12 mx-auto max-w-7xl lg:pt-36 lg:px-16 md:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-4xl font-extrabold tracking-tight md:text-6xl">
          Unlock Your Best Self <br />
          with{" "}
          <span className="inline-flex animate-text-gradient bg-gradient-to-r from-[#FFA0A0] via-[#7600FF] to-[#c7d2fe] bg-[240%_auto] bg-clip-text text-4xl md:text-6xl font-extrabold text-transparent">
            iHealth
          </span>
        </p>
        <p className="max-w-xl mx-auto mt-8 text-base lg:text-lg text-slate-400">
          Seamlessly Blend Fun and Work Modes for Ultimate Health Management
        </p>
      </div>
      <div className="flex flex-col justify-center gap-3 mt-6 sm:flex-row">
        <ButtonRotatingBackgroundGradient>
          <Link href="/sign-in">Get Started Now</Link>
        </ButtonRotatingBackgroundGradient>
      </div>
    </div>
  );
};
