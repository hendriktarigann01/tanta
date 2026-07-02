"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimateInViewProps {
  children:   React.ReactNode;
  className?: string;
  delay?:     number;
  duration?:  number;
  variant?:   "fade-up" | "fade-in" | "fade-left" | "fade-right";
  once?:      boolean;
  margin?:    string;
}

const variantMap = {
  "fade-up":    { hidden: { opacity: 0, y: 32 },  visible: { opacity: 1, y: 0 } },
  "fade-in":    { hidden: { opacity: 0 },           visible: { opacity: 1 } },
  "fade-left":  { hidden: { opacity: 0, x: -32 },  visible: { opacity: 1, x: 0 } },
  "fade-right": { hidden: { opacity: 0, x: 32 },   visible: { opacity: 1, x: 0 } },
};

/**
 * Wrapper yang menganimasikan children saat masuk viewport.
 * Gunakan sebagai pengganti div biasa di setiap section.
 */
export function AnimateInView({
  children,
  className,
  delay    = 0,
  duration = 0.6,
  variant  = "fade-up",
  once     = true,
  margin   = "-80px",
}: AnimateInViewProps) {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: margin as `${number}px` });

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      variants={variantMap[variant]}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
