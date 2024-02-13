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
    <motion.div className="relative items-center rounded-2xl w-full py-0 mx-auto max-w-7xl shadow-xl" ref={ref} style={{ scale, opacity}}>
      <Image
        src="/website-wireframe.png"
        alt="photo"
        className="relative object-cover h-full w-full rounded lg:rounded-2xl"
        height="1000"
        width="800"
      />
    </motion.div>
  );
};
