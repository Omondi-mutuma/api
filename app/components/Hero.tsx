import React from "react";
import { AnimatedTooltipPreview } from "./AnimatedTooltipPreview";

const Hero = () => {
  return (
    <section className="w-full max-h-screen overflow-hidden">
      <div className="px-12 pt-8 grid grid-cols-12 gap-6 lg:pt-18 lg:px-18">
        <h1 className="text-8xl font-bold col-span-9">Lighting the Way</h1>
        <p className="col-span-3 flex items-center">
          The utilization of solar and wind energy does not generate carbon
          emmissions or pollutants.
        </p>
        <div className="col-span-2 flex items-center justify-center py-6">
          <AnimatedTooltipPreview />
        </div>
        <h1 className="text-8xl font-bold col-span-10">Sustainable Energy</h1>
      </div>
      <video autoPlay muted loop className="w-full">
        <source src="/1851190-hd_1280_720_25fps.mp4" />
      </video>
    </section>
  );
};

export default Hero;
