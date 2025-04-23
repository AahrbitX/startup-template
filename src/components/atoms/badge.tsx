"use client";

import {
  ServiceType,
  useServices,
} from "@/app/(home)/sections/services/context";
import { cn } from "@/lib/cn";
import { ElementType } from "react";

export const Badge = ({
  text,
  Icon,
}: {
  Icon: ElementType;
  text: ServiceType;
}) => {
  const { selected, setSelected } = useServices();

  const active = text === selected;

  return (
    <button
      className={cn(
        "px-4 py-2 rounded-full border-secondary  bg-black border-1 inline-flex items-center justify-between gap-2 text-white cursor-pointer",
        active && "border-primary"
      )}
      onClick={() => setSelected(text)}
    >
      <Icon className="size-4.5 text-primary" />
      {text}
    </button>
  );
};
