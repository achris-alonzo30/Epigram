"use client";

import Image from "next/image";
import Link from "next/link";

import { useMediaQuery } from "usehooks-ts";
import { useRef, useState, useEffect, ElementRef } from "react";

import { cn } from "@/lib/utils";
import { SidebarLinks } from "@/lib/map-links";

import { ChevronLeft } from "lucide-react";
import { Navbar } from "./navbar";

export const LeftSidebar = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const isResizingRef = useRef(false);
  const sidebarRef = useRef<ElementRef<"aside">>(null);
  const navbarRef = useRef<ElementRef<"div">>(null);

  const [isResetting, setIsResetting] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(isMobile);

  useEffect(() => {
    if (!isMobile) {
      collapse();
    } else {
      resetWidth();
    }
  }, [isMobile]);

  useEffect(() => {
    if (!isMobile) collapse();
  }, [isMobile]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();

    isResizingRef.current = true;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isResizingRef.current) return;

    let newWidth = e.clientX;

    if (newWidth < 240) newWidth = 240;
    if (newWidth > 340) newWidth = 340;

    if (sidebarRef.current && navbarRef.current) {
      sidebarRef.current.style.width = `${newWidth}px`;
      navbarRef.current.style.setProperty("left", `${newWidth}px`);
      navbarRef.current.style.setProperty(
        "width",
        `calc(100% - #{newWidth}px)`
      );
    }
  };

  const handleMouseUp = () => {
    isResizingRef.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const resetWidth = () => {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(false);
      setIsResetting(true);

      sidebarRef.current.style.width = isMobile ? "100%" : "240px";
      navbarRef.current.style.setProperty(
        "width",
        isMobile ? "0" : "calc(100% - 240px)"
      );

      navbarRef.current.style.setProperty("left", isMobile ? "100%" : "240px");

      setTimeout(() => setIsResetting(false), 300);
    }
  };

  const collapse = () => {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(true);
      setIsResetting(true);

      sidebarRef.current.style.width = "0";
      navbarRef.current.style.setProperty("width", "100%");
      navbarRef.current.style.setProperty("left", "0");

      setTimeout(() => setIsResetting(false), 300);
    }
  };

  return (
    <>
      <aside
        ref={sidebarRef}
        className={cn(
          "group/sidebar h-full bg-secondary overflow-y-auto relative flex w-60 flex-col",
          isResetting && "transition-all ease-in-out duration-300",
          isMobile && "w-0"
        )}
      >
        <div
          role="button"
          className={cn(
            "h-6 w-6 text-muted-foreground rounded-sm hover:bg-neutral-400 dark:hover:bg-neutral-700 absolute top-5 right-3 opacity-0 group-hover/sidebar:opacity-100 transition",
            isMobile && "opacity-100"
          )}
          onClick={collapse}
        >
          <ChevronLeft className="h-6 w-6" />
        </div>
        <div className="flex gap-x-2 items-center px-4 mt-3">
          <Image src="/logo.svg" alt="logo" width={40} height={40} />
          <h1 className="inline-flex animate-text-gradient bg-gradient-to-r from-[#FFA0A0] via-[#7600FF] to-[#c7d2fe] bg-[240%_auto] bg-clip-text text-xl font-semibold text-transparent">
            iHealth
          </h1>
        </div>
        <div className="mt-4 flex flex-col gap-y-6 pl-4 ">
          {SidebarLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                href={link.link}
                key={link.name}
                className="flex items-center gap-x-2 text-lg font-medium text-muted-foreground group"
              >
                <Icon className="h-6 w-6 text-muted-foreground group-hover:text-zinc-400" />
                <span className="group-hover:text-zinc-400">{link.name}</span>
              </Link>
            );
          })}
        </div>
        <div
          onMouseDown={handleMouseDown}
          onClick={resetWidth}
          className="opacity-0 group-hover/sidebar:opacity-100 transition cursor-ew-resize absolute h-full w-1 bg-primary/10 right-0 top-0"
        />
      </aside>
      <div
        ref={navbarRef}
        className={cn(
          "absolute top-0 left-60 w-[calc(100%-240px)]",
          isResetting && "transition-all ease-in-out duration-300",
          isMobile && "left-0 w-full"
        )}
      >
        <Navbar isCollapse={isCollapsed} onResetWidth={resetWidth} />
      </div>
    </>
  );
};
