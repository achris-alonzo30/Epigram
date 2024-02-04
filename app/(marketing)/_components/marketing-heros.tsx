"use client";
import { motion } from "framer-motion";
import { TextGradient } from "@/components/animated-ui/text-gradient";
import { ButtonRotatingBackgroundGradient } from "@/components/animated-ui/button-rotating-background-gradient";

export const MarketingHeros = () => {

  return (
    <div className="items-center w-full px-5 py-12 mx-auto max-w-7xl lg:pt-36 lg:px-16 md:px-12">
      <div className="max-w-3xl mx-auto text-center ">
        <motion.h1
          className="font-extrabold text-6xl lg:text-7xl mb-1 text-zinc-800 dark:text-zinc-100"
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
          Thrive Longer, <br />
          Live Stronger  <br />
          with{" "}
          <TextGradient fontSize={["text-6xl lg:text-7xl"]} fontStyle="font-extrabold">
            Epigram
          </TextGradient>

        </motion.h1>
        <motion.p
          className="max-w-xl mx-auto mt-8 text-xl lg:text-2xl font-medium text-zinc-600 dark:text-zinc-300"
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
          Unlock Your Best Self
        </motion.p>
      </div>
      <motion.div
        className="flex flex-col justify-center gap-3 mt-6 sm:flex-row mx-auto w-40"
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
        
          <ButtonRotatingBackgroundGradient route="/create-profile">
            Start Here
          </ButtonRotatingBackgroundGradient>
        
      </motion.div>
    </div>
  );
};
