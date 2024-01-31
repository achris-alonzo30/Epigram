"use client";

import { motion } from "framer-motion";
import { SignInButton } from "@clerk/nextjs";
import { MarketingCTALinks } from "@/lib/map-links";
import { Button } from "@/components/ui/button";

export const MarketingCTA = () => {
  return (
    <div className="container grid grid-cols-1 gap-8 px-6 lg:py-36 md:py-24 sm:py-12 mx-auto lg:grid-cols-2">
      {MarketingCTALinks.map((link) => (
        <div
          className="flex flex-col items-center max-w-lg mx-auto text-center"
          key={link.title}
        >
          <motion.h2
            className="text-3xl font-semibold tracking-tight text-slate-600 dark:text-slate-100 "
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.75,
              duration: 1,
              ease: "easeInOut",
              type: "spring",
            }}
            viewport={{ once: true }}
          >
            {link.title}
          </motion.h2>
          <motion.p
            className="mt-3 text-slate-400"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1,
              duration: 1,
              ease: "easeInOut",
              type: "spring",
            }}
            viewport={{ once: true }}
          >
            {link.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.25,
              duration: 1,
              ease: "easeInOut",
              type: "spring",
            }}
            viewport={{ once: true }}
          >
            <SignInButton>
              <Button className="items-center mt-4 inline-flex focus:outline-none justify-center text-white bg-[#7600FF] duration-200 focus-visible:outline-black focus-visible:ring-black font-medium hover:bg-[#7600FF]/70 hover:border-white hover:text-white lg:w-auto px-6 py-3 rounded-full text-center w-full transform hover:-translate-y-1 transition duration-400" >
                {link.buttonTitle}
              </Button>
            </SignInButton>
          </motion.div>
        </div>
      ))}
    </div>
  );
};
