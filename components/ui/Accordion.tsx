"use client";

import { useState, ReactNode } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionProps {
  title: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

export default function Accordion({
  title,
  children,
  defaultOpen = false,
  className,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={cn("border border-gray-200 rounded-lg overflow-hidden", className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <div className="flex-1 text-left">{title}</div>
        <div className="ml-4">
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-gray-600" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-600" />
          )}
        </div>
      </button>
      {isOpen && (
        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
          {children}
        </div>
      )}
    </div>
  );
}

