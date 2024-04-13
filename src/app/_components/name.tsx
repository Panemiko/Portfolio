"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function Name() {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <span>Tito</span>
        </TooltipTrigger>
        <TooltipContent className="font-normal">
          Isso não é apelido. É um nome de verdade.
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
