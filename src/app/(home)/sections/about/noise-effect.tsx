import React, { PropsWithChildren } from "react";

function NoiseEffect({ children }: PropsWithChildren) {
  return (
    <div className="relative w-full h-full">
      <div
        className="absolute top-0 left-0 w-full h-full content-[''] z-10 pointer-events-none bg-[url('https://res.cloudinary.com/dpb8r7bqq/image/upload/v1732936234/RpdD_grqwvx.gif')]  rounded-2xl "
        style={{ opacity: 0.04 }}
      ></div>
      <div className="size-full  rounded-2xl  font-semibold bg-neutral-900">
        {children}
      </div>
    </div>
  );
}

export default NoiseEffect;
