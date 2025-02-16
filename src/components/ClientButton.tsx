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
    <button 
      type={type}
      className={className}
    >
      {children}
    </button>
  );
}