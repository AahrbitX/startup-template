"use client";

import SectionHeading from "@/components/molecules/section-heading";
import React, { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";

const DynamicWorldMapBlock = dynamic(() => import("./world-map"), {
  ssr: false,
  loading: () => {
    return <>map is loading</>;
  },
});

function RemoteSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowMap(true);
          observer.disconnect();
        }
      },
      { rootMargin: "100px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="remote" className="max-w-7xl mx-auto my-20 z-10">
      <div className="flex flex-col md:flex-row items-center justify-between w-full md:px-4 lg:px-10">
        <SectionHeading text="Global Reach" />
        <p className="text-gray-500 w-[398px] text-balance text-center px-4">
          Empowering businesses across borders. Our services are accessible from
          anywhere, anytime.
        </p>
      </div>
      <div
        ref={ref}
        className="min-h-[400px] flex items-center justify-center w-full"
      >
        {showMap ? (
          <DynamicWorldMapBlock />
        ) : (
          <div className="text-gray-400">Preparing map...</div>
        )}
      </div>
    </section>
  );
}

export default RemoteSection;
