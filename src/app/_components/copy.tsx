"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState, type ReactNode } from "react";

export function Copy({
  children,
  value,
}: {
  children: ReactNode;
  value: string;
}) {
  const [open, setOpen] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(value);
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 3000);

    function eventListener() {
      setOpen(false);
      document.removeEventListener("click", eventListener);
    }

    document.addEventListener("click", eventListener);
  }

  return (
    <TooltipProvider>
      <Tooltip
        open={open}
        onOpenChange={() => {
          //
        }}
      >
        <TooltipTrigger asChild>
          <button onClick={copy} className="flex items-center gap-3">
            <span className="font-mono text-foreground/70">{children}</span>
          </button>
        </TooltipTrigger>
        <TooltipContent>Copiado!</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
