import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Dock from "@/components/molecules/mac-dock";
import { cn } from "@/lib/cn";

const contentMap: Record<string, string[]> = {
  about: [
    "Moderno redefines digital craftsmanship by merging cutting-edge technology with intuitive design, creating tools that disappear into the flow of creation.",
    "We build intelligent platforms that amplify human potential — where AI handles the tedious so teams can focus on breakthrough ideas.",
    "Every pixel and algorithm we craft follows one principle: technology should feel less like a tool and more like an extension of thought.",
  ],
  vision: [
    "We're pioneering a future where the distance between inspiration and realization collapses — where creators ship world-changing work at the speed of imagination.",
    "Moderno isn't just removing technical barriers; we're redesigning the creative process itself for the AI era, making exceptional outcomes inevitable.",
  ],
  values: [
    "✨ Minimalism with purpose: We strip away complexity until only the essential magic remains.",
    "⚡ Velocity as a virtue: Our systems move faster than your ideas can outpace them.",
    "❤️ Human-centered alchemy: We measure success by how effortlessly our tools unlock potential.",
  ],
};

export const BrowserComponent: React.FC<{
  className?: string;
}> = ({ className }) => {
  const [section, setSection] = useState<keyof typeof contentMap>("about");

  return (
    <div
      className={cn(
        "relative text-sm text-neutral-400  border border-neutral-800 rounded-lg w-full min-h-[800px] md:min-h-[600px] shadow-none shadow-gray-200 bg-neutral-950",
        className
      )}
    >
      <div
        className={
          "border-b border-inherit flex items-center justify-between w-full py-2 px-4 bg-inherit rounded-t-lg"
        }
      >
        <div className={"flex gap-2"}>
          <div className="w-3 h-3 rounded-full bg-[#FF605C]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD44]" />
          <div className="w-3 h-3 rounded-full bg-[#00CA4E]" />
        </div>
        <div
          className={
            "border border-inherit rounded-md flex gap-2 px-1.5 py-1 font-sans w-fit min-w-1/3"
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2"
            className={"stroke-neutral-700 w-4 max-w-5"}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          <span className={"text-sm flex items-center justify-center"}>
            https://modero.io/{section}
          </span>
        </div>
        <div />
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-3xl md:text-4xl text-center  lg:text-5xl font-semibold capitalize">
          {section}
        </h3>
        <AnimatePresence mode="wait">
          <motion.div
            key={section}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="space-y-3"
          >
            {contentMap[section].map((line, idx) => (
              <p className="text-lg lg:text-xl" key={idx}>
                {line}
              </p>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <Dock setSection={setSection} />
    </div>
  );
};
