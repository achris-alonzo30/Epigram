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
    <div className="container px-6 md:py-24 py-12 mx-auto">
      <motion.h1
        className="text-2xl md:text-4xl  font-bold text-center dark:text-zinc-100 text-zinc-800 capitalize "
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
        Paw-erful Social Networking
      </motion.h1>
      <motion.p
        className="mt-2 text-center text-base md:text-lg text-zinc-600 dark:text-zinc-400"
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
        Experience the paw-er of social networking with Epigram&apos;s features, connecting pets and their owners in a unique way.
      </motion.p>
      <div className="w-full">
        <InfiniteMovingCards direction="right" speed="slow" />
      </div>
    </div>
  );
};
