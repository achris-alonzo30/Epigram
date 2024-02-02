"use client";

import { FeatureLinks } from "@/lib/map-links";
import { cn } from "@/lib/utils";
import { useEffect, useState, useRef} from "react";

export const InfiniteMovingCards = ({
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}: {
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollerRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        addAnimation();
    }, []);
    const [start, setStart] = useState(false);
    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }
    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards"
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse"
                );
            }
        }
    };
    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    };
    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 mt-6 max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
                    start && "animate-scroll ",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {FeatureLinks.map((feature, idx) => (
                    <li
                        className="w-[350px] max-w-full relative rounded-2xl border shadow-lg dark:shadow-slate-500 flex-shrink-0 border-slate-500 px-8 py-6 md:w-[450px] transform hover:-translate-y-2 transition duration-400"
                        style={{
                            background:
                                "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
                        }}
                        key={feature.title}
                    >
                        <blockquote>
                            <div
                                aria-hidden="true"
                                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                            ></div>
                            <div className="flex gap-x-2 items-center"><feature.icon className="w-6 h-6 text-center text-[#7600FF]" />
                            <span className=" text-base leading-[1.6] text-slate-500 dark:text-slate-200 font-medium">
                                {feature.title}
                            </span></div>
                            
                            <div className="relative z-20 mt-6 flex flex-row items-center">
                                <span className="flex flex-col gap-1">
                                    <span className=" relative z-20 text-sm leading-[1.6] text-muted-foreground font-normal">
                                        {feature.description}
                                    </span>
                                </span>
                            </div>
                        </blockquote>
                    </li>
                ))}
            </ul>
        </div>
    );
};
