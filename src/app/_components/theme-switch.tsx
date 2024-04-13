"use client";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SunMoonIcon } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeSwitch() {
  const { setTheme, theme } = useTheme();

  async function switchTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button onClick={switchTheme} variant="outline" size="icon">
            <SunMoonIcon />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Trocar tema</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
