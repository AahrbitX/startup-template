import React from "react";
import NoiseEffect from "./noise-effect";

function AboutSection() {
  return (
    <section
      id="about"
      className="h-svh flex flex-col p-3 sm:p-6 md:p-10 lg:p-16"
    >
      <NoiseEffect></NoiseEffect>
    </section>
  );
}

export default AboutSection;
