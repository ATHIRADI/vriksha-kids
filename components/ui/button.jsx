import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap  text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer transition-all  duration-300 body-bold uppercase",
  {
    variants: {
      variant: {
        default:
          "bg-effect text-tertiary shadow-xs hover:bg-hover-primary rounded-full",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border border-accent bg-background shadow-xs hover:bg-hover-secondary hover:text-accent-foreground dark:bg-input/30 dark:border-input  dark:hover:bg-input/50 rounded-full",
        secondary:
          "bg-dark text-accent hover:bg-hover-secondary hover:text-text-dark transition-all duration-300 rounded-full",
        ghost:
          "hover:bg-effect hover:text-accent-foreground dark:hover:bg-effect/50",
        link: "text-primary underline-offset-4 hover:underline hover:text-accent",
      },
      size: {
        default: "px-6 py-2 has-[>svg]:px-3",
        sm: "h-8  gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10  px-6 has-[>svg]:px-4",
        icon: "size-12 ",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? Slot : "button";

  return (
    <div>
      <Comp
        data-slot="button"
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    </div>
  );
}

export { Button, buttonVariants };
