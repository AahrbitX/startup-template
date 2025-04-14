import React from "react";

function SectionHeading({ text }: { text: string }) {
  return (
    <h2 className="text-2xl mb-4 lg:text-5xl font-bold uppercase font-heading text-gray-300 tracking-widest">
      {text}
      <span className="size-2 md:size-4 ml-2 md:ml-4 bg-primary rounded-full inline-block" />
    </h2>
  );
}

export default SectionHeading;
