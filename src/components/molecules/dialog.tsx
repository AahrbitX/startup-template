"use client";

import { useState, ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { IconX } from "@tabler/icons-react";

import { cn } from "@/lib/cn";

type AnimationStyle =
  | "from-bottom"
  | "from-center"
  | "from-top"
  | "from-left"
  | "from-right"
  | "fade"
  | "top-in-bottom-out"
  | "left-in-right-out";

interface DialogProps {
  animationStyle?: AnimationStyle;
  className?: string;
  trigger: ReactNode;
  children: ReactNode;
  maxWidth?: string;
  closeOnClickOutside?: boolean;
  showCloseButton?: boolean;
}

const animationVariants = {
  "from-bottom": {
    initial: { y: "100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "100%", opacity: 0 },
  },
  "from-center": {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.5, opacity: 0 },
  },
  "from-top": {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "-100%", opacity: 0 },
  },
  "from-left": {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
  },
  "from-right": {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  "top-in-bottom-out": {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "100%", opacity: 0 },
  },
  "left-in-right-out": {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  },
};

export function Dialog({
  animationStyle = "from-center",
  trigger,
  children,
  className,
  maxWidth = "max-w-2xl",
  closeOnClickOutside = true,
  showCloseButton = true,
}: DialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const selectedAnimation = animationVariants[animationStyle];

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleBackdropClick = () => {
    if (closeOnClickOutside) {
      handleClose();
    }
  };

  return (
    <>
      <div className="cursor-pointer" onClick={handleOpen}>
        {trigger}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleBackdropClick}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md"
          >
            <motion.div
              {...selectedAnimation}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className={cn(
                "relative mx-4 w-full overflow-hidden rounded-xl p-6 shadow-2xl bg-foreground",
                maxWidth
              )}
              onClick={(e) => e.stopPropagation()}
            >
              {showCloseButton && (
                <motion.button
                  className="absolute right-4 top-4 rounded-full  p-2  ring-1  backdrop-blur-md  bg-neutral-800/80 text-neutral-300 ring-neutral-700 hover:bg-neutral-700/90"
                  onClick={handleClose}
                >
                  <IconX className="size-5" />
                </motion.button>
              )}
              <div className="mt-2">{children}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
