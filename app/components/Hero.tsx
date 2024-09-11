import React from "react";
import { AnimatedTooltipPreview } from "./AnimatedTooltipPreview";

const Hero = () => {
  return (
    <section className="w-full max-h-screen overflow-hidden">
      <div className="hidden px-12 pt-8 lg:grid grid-cols-12 gap-6 lg:pt-18 lg:px-16">
        <h1 className="md:5xl lg:text-8xl font-bold col-span-9">
          Lighting the Way
        </h1>
        <p className="col-span-3 flex items-center">
          The utilization of solar and wind energy does not generate carbon
          emmissions or pollutants.
        </p>
        <div className="col-span-2 flex items-center justify-center py-6">
          <AnimatedTooltipPreview />
        </div>
        <h1 className="md:5xl lg:text-8xl font-bold col-span-10">
          Sustainable Energy
        </h1>
      </div>
      <div className="p-4 flex flex-col gap-6 lg:hidden">
        <h1 className="text-5xl font-bold">
          Lighting the Way in Sustainable Energy
        </h1>
        <p className="col-span-3 flex items-center">
          The utilization of solar and wind energy does not generate carbon
          emmissions or pollutants.
        </p>
        <AnimatedTooltipPreview />
      </div>
      <video autoPlay muted loop className="w-full">
        <source src="/1851190-hd_1280_720_25fps.mp4" />
      </video>
    </section>
  );
};

export default Hero;
