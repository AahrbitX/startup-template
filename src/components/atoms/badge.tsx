import { cn } from "@/lib/cn";
import { ElementType } from "react";

export const Badge = ({
  text,
  Icon,
  active,
}: {
  Icon: ElementType;
  text: string;
  active?: boolean;
}) => {
  return (
    <span
      className={cn(
        "px-4 py-2 rounded-full border-secondary  bg-black border-1 inline-flex items-center justify-between gap-2 text-white",
        active && "border-primary"
      )}
    >
      <Icon className="size-4.5 text-primary" />
      {text}
    </span>
  );
};
