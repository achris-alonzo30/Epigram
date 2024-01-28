"use client";

import Image from "next/image";

export const MarketingImage = () => {
    return (
        <div className="relative items-center w-full py-12 pb-12 mx-auto mt-12 max-w-7xl">
          <Image
            src="/wireframe.png"
            alt="photo"
            className="relative object-cover w-full rounded lg:rounded-2xl"
            fill
          />
        </div>
    )
}