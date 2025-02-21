'use client';
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ClientButtonProps {
  children: ReactNode;
  className?: string;
  type?: "button" | "submit";
}

export default function ClientButton({ children, className, type = "button" }: ClientButtonProps) {
  return (
    <motion.button 
      type={type}
      className={className}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="block">
        {children}
      </span>
    </motion.button>
  );
}