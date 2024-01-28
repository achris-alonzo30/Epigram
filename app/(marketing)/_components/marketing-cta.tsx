"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import { MarketingCTALinks } from "@/lib/map-links";

export const MarketingCTA = () => {
  return (
    <div className="container grid grid-cols-1 gap-8 px-6 py-12 mx-auto lg:grid-cols-2">
      {MarketingCTALinks.map((link) => (
        <motion.div
          className="flex flex-col items-center max-w-lg mx-auto text-center"
          key={link.title}
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
          <h2 className="text-3xl font-semibold tracking-tight text-slate-600 dark:text-slate-100 ">
            {link.title}
          </h2>
          <p className="mt-3 text-slate-400">{link.description}</p>
          <Link
            href="/sign-in"
            className="items-center mt-4 inline-flex focus:outline-none justify-center text-white bg-[#7600FF] duration-200 focus-visible:outline-black focus-visible:ring-black font-medium hover:bg-[#7600FF]/70 hover:border-white hover:text-white lg:w-auto px-6 py-3 rounded-full text-center w-full transform hover:-translate-y-1 transition duration-400"
          >
            {link.buttonTitle}
          </Link>
        </motion.div>
      ))}
    </div>
  );
};
