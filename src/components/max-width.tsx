import { cn } from "@/lib/utils";
import { type ComponentPropsWithoutRef } from "react";

export function MaxWidth({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("mx-auto max-w-screen-md px-6", className)} {...props} />
  );
}
