"use client";
import LinkButton from "./LinkButton";
import { FaArrowAltCircleRight } from "react-icons/fa";
import CountUp from "react-countup";
import { stats } from "../constants/index.c";
import Image from "next/image";

const About = () => {
  return (
    <section className="container lg:py-18 lg:px-24 max-h-screen lg:flex justify-center gap-36">
      <div className="flex flex-col">
        <div className="max-w-lg">
          <h3 className="text-lg font-medium text-yellow-600">(02) About Us</h3>
          <h2 className="text-3xl font-semibold mt-4 lg:text-5xl">
            Our Passion for Services
          </h2>
          <p className="mt-4">
            Approach based on a deep understanding of the market, we are
            committed to delivering innovative property solutions
          </p>
          <LinkButton
            label="Learn More"
            href="#"
            icon={FaArrowAltCircleRight}
          />
        </div>
        <div className="flex justify-between mt-8 lg:flex lg:gap-6">
          {stats.map((stat, index) => (
            <div key={index}>
              <CountUp
                end={stat.value}
                suffix={stat.suffix}
                decimal={stat.decimal}
                decimals={stat.decimals}
                className="text-2xl font-bold lg:text-5xl"
              />
              <p className="text-sm">{stat.title}</p>
            </div>
          ))}
        </div>
      </div>
      <Image
        src={
          "https://plus.unsplash.com/premium_photo-1678864963908-5fa7d014159b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt="fgfg"
        width={500}
        height={1000}
        className="hidden lg:block"
      />
    </section>
  );
};

export default About;
