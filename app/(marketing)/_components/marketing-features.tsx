"use client";

import { motion } from "framer-motion";

import { InfiniteMovingCards } from "@/components/animated-ui/infinite-moving-cards";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1,
      duration: 1,
      ease: "easeInOut",
      type: "spring",
    },
  },
};

export const MarketingFeatures = () => {
  return (
    <div className="container px-6 md:py-24 sm:py-12 mx-auto">
      <motion.h1
        className="text-3xl font-semibold text-center text-slate-800 capitalize lg:text-4xl dark:text-white"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.25,
          duration: 1,
          ease: "easeInOut",
          type: "spring",
        }}
        viewport={{ once: true }}
      >
        What Awaits You?
      </motion.h1>
      <motion.p
        className="mt-2 text-center text-lg text-slate-600 dark:text-gray-500"
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
        Explore the features that redefine how you approach health and
        well-being.
      </motion.p>
      <div className="w-full">
        <InfiniteMovingCards direction="right" speed="slow" />
      </div>
    </div>
  );
};
