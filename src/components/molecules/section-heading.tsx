import React from "react";
import { TextAnimate } from "../organisms/text-effect";

function SectionHeading({ text }: { text: string }) {
  return (
    <TextAnimate
      as={"h2"}
      delay={0.4}
      animation="slideUp"
      className="text-2xl mb-4 lg:text-5xl font-bold uppercase font-heading text-gray-300 tracking-widest"
    >
      {text}
      {/* <span className="size-2 md:size-4 ml-2 md:ml-4 bg-primary rounded-full inline-block" /> */}
    </TextAnimate>
  );
}

export default SectionHeading;
