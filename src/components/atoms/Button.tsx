import { cn } from "@/lib/cn";
import React, { ButtonHTMLAttributes, PropsWithChildren } from "react";

type Variant = keyof typeof variants;

type Props = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> & {
  variant?: Variant;
};

const variants = {
  default: "bg-neutral-800 text-primary hover:bg-neutral-700",
  outline: "border border-neutral-800 text-black",
};

function Button({ className, children, variant = "default", ...rest }: Props) {
  return (
    <button
      className={cn(
        variants[variant],
        "cursor-pointer px-4 py-2 rounded-3xl",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
