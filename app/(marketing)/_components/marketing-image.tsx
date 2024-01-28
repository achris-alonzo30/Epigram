"use client";

import Image from "next/image";
import { useRef } from "react";
import { useScroll, motion, useTransform, } from "framer-motion"

export const MarketingImage = () => {
  const ref= useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"]
  })

  const scale = useTransform (scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform (scrollYProgress, [0, 1], [0.5, 1]);
  return (
    <motion.div className="relative items-center w-full py-12 pb-12 mx-auto mt-12 max-w-7xl" ref={ref} style={{ scale, opacity}}>
      <Image
        src="/wireframe.png"
        alt="photo"
        className="relative object-cover w-full h-full rounded lg:rounded-2xl"
        width={1000}
        height={1000}
      />
    </motion.div>
  );
};
