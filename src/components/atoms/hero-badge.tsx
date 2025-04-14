import React from "react";

function HeroBadge({ Icon, text }: { Icon: React.ElementType; text: string }) {
  return (
    <span className="px-2 py-1 rounded-full border-secondary border-1 flex items-center text-xs justify-between gap-2">
      <Icon className="size-5" />
      {text}
    </span>
  );
}

export default HeroBadge;
