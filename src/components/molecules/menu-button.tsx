"use client";

import { motion } from "motion/react";

type SideMenuBtnProps = {
  crossed: boolean;
  setCrossedState: React.Dispatch<React.SetStateAction<boolean>>;
};

//just move open/close state to parent component
export const SideMenuBtn = ({ crossed, setCrossedState }: SideMenuBtnProps) => {
  return (
    <button
      aria-expanded={crossed}
      onClick={() => setCrossedState((e) => !e)}
      className={
        "flex aspect-square h-fit select-none flex-col items-center justify-center rounded-full"
      }
    >
      <motion.div
        style={{
          width: "20px",
          borderTop: "2px solid var(--color-neutral-500)",
          transformOrigin: "center",
        }}
        initial={{ translateY: "-3px" }}
        animate={
          crossed
            ? { rotate: "45deg", translateY: "1px" }
            : { translateY: "-3px", rotate: "0deg" }
        }
        transition={{ bounce: 0, duration: 0.1 }}
      />
      <motion.div
        transition={{ bounce: 0, duration: 0.1 }}
        style={{
          width: "20px",
          borderTop: "2px solid var(--color-neutral-500)",
          transformOrigin: "center",
        }}
        initial={{ translateY: "3px" }}
        animate={
          crossed
            ? { rotate: "-45deg", translateY: "-1px" }
            : { translateY: "3px", rotate: "0deg", scaleX: 1 }
        }
      />
    </button>
  );
};
