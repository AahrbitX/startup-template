import { ElementType } from "react";
import { IconRobot, IconFlask, Icon3dCubeSphere } from "@tabler/icons-react";
import { cn } from "@/lib/cn";

type DockProps = {
  setSection: (key: "about" | "vision" | "values") => void;
};

export default function Dock({ setSection }: DockProps) {
  return (
    <div className="-translate-x-1/2 absolute bottom-2 left-1/2 mx-auto max-w-full transform-gpu pt-4">
      <div className="relative">
        <div className="pointer-events-none absolute right-0 bottom-0 left-0 z-10 h-[72px] max-w-full rounded-3xl border  shadow-2xs border-gray-600/60 bg-gray-800/60" />
        <div className="flex items-end overflow-x-auto rounded-3xl pl-2">
          <AppIcon Icon={IconRobot} onClick={() => setSection("about")} />
          <AppIcon Icon={IconFlask} onClick={() => setSection("vision")} />
          <AppIcon
            Icon={Icon3dCubeSphere}
            onClick={() => setSection("values")}
          />
        </div>
      </div>
    </div>
  );
}

function AppIcon({
  Icon,
  onClick,
}: {
  Icon?: ElementType;
  onClick?: () => void;
}) {
  return (
    <div
      className="group z-20 grid w-fit cursor-pointer place-items-center p-2 pl-0"
      onClick={onClick}
    >
      <div
        className={cn(
          "pointer-events-none z-20 inline size-14 transform-gpu overflow-hidden rounded-2xl  shadow-inner transition-all duration-200 group-hover:size-[4rem] group-hover:shadow-2xs bg-gray-800 p-4"
        )}
      >
        {Icon && <Icon className="size-6 group-hover:size-8 transition-all " />}
      </div>
    </div>
  );
}
