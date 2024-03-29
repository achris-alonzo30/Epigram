"use client";

import Link from "next/link"
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { MarketingCTALinks } from "@/lib/map-links";
import CardTilt from "@/components/animated-ui/card-tilt";

export const CallToAction = () => {
  return (
    <div className="container grid grid-cols-1 gap-8 px-6 lg:py-36 md:py-24 sm:py-12 mx-auto lg:grid-cols-2 mb-12">
      {MarketingCTALinks.map((link) => (
        <div
          className="flex flex-col items-center max-w-lg mx-auto text-center space-y-2 mb-8"
          key={link.title}
        >
          <CardTilt>
            <motion.h2
              className="text-xl md:text-3xl font-semibold tracking-tight text-zinc-800 dark:text-gray-100 "
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
              className="mt-3 text-zinc-600 dark:text-zinc-400 text-base md:text-lg "
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
          </CardTilt>
        </div>
      ))}
    </div>
  );
};
