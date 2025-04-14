import { ElementType } from "react";

export const Badge = ({ text, Icon }: { Icon: ElementType; text: string }) => {
  return (
    <span className="px-4 py-1 rounded-full border-secondary border-1 inline-flex items-center justify-between gap-2 text-white">
      <Icon className="size-5" />
      {text}
    </span>
  );
};
