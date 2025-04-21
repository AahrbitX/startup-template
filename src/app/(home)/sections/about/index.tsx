"use client";

import React from "react";
import { BrowserComponent } from "./mockBrowser";
import BentoGridBlock from "./BentroGridBlock";

function AboutSection() {
  return (
    <section className="min-h-screen max-w-7xl mx-auto py-20 px-6 md:px-10">
      <BrowserComponent></BrowserComponent>
      <BentoGridBlock />
    </section>
  );
}

export default AboutSection;
