"use client";

import { motion } from "framer-motion";

import { FeatureLinks } from "@/lib/map-links";

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
    },
  },
};

export const MarketingFeatures = () => {
  return (
    <div className="container px-6 py-10 mx-auto">
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
        className="mt-2 text-center text-lg text-slate-600 dark:text-slate-400"
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
      <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
        {FeatureLinks.map((feature) => (
          <motion.div
            className="flex flex-col items-center p-6 space-y-3 text-center rounded-xl bg-gray-100 dark:bg-gray-800 transition-transform hover:-translate-x-2 hover:-translate-y-2"
            key={feature.title}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <feature.icon className="w-6 h-6 text-[#7600FF]" />
            <h1 className="text-xl font-semibold text-slate-700 capitalize dark:text-slate-100">
              {feature.title}
            </h1>
            <p className="text-slate-600 dark:text-slate-400">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
