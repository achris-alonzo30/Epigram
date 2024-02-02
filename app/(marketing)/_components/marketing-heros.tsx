"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { TextGradient } from "@/components/animated-ui/text-gradient";
import { ButtonRotatingBackgroundGradient } from "@/components/animated-ui/button-rotating-background-gradient";

export const MarketingHeros = () => {

  return (
    <div className="relative items-center w-full px-5 py-16 mx-auto max-w-7xl lg:pt-36 lg:px-16 md:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <motion.p
          className="text-4xl font-extrabold tracking-tight md:text-6xl"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 1,
            ease: "easeInOut",
            type: "spring",
          }}
          viewport={{ once: true }}
        >
          Unlock Your Best Self <br />
          with{" "}
          <TextGradient fontSize={["md:text-6xl text-4xl"]} fontStyle="font-extrabold">
            iHealth
          </TextGradient>
        </motion.p>
        <motion.p
          className="max-w-xl mx-auto mt-8 text-base lg:text-lg dark:text-gray-500 text-slate-600"
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
          Seamlessly Blend Fun and Work Modes for Ultimate Health Management
        </motion.p>
      </div>
      <motion.div
        className="flex flex-col justify-center gap-3 mt-6 sm:flex-row"
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
        <ButtonRotatingBackgroundGradient>
            <Link href="/create-profile">Get Started Now</Link>
        </ButtonRotatingBackgroundGradient>
      </motion.div>
    </div>
  );
};
