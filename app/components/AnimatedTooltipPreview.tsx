"use client";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import React from "react";

const people = [
  {
    id: 1,
    name: "Eng. William Wandera",
    designation: "Solar Engineer",
    image:
      "https://images.unsplash.com/photo-1533108165347-036ec233d7ec?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Cami estrella",
    designation: "Head of Green Research",
    image:
      "https://images.unsplash.com/photo-1530785602389-07594beb8b73?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "George Odhiambo",
    designation: " Head of climate research",
    image:
      "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Emily Chebet",
    designation: "Environmental scientist",
    image:
      "https://images.unsplash.com/photo-1520584229410-24ebf86ad31c?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  // {
  //   id: 5,
  //   name: "Tyler Durden",
  //   designation: "Solar systems Developer",
  //   image:
  //     "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  // },
  // {
  //   id: 6,
  //   name: "Doreen Lindsey",
  //   designation: "Mechanical engineer",
  //   image:
  //     "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  // },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
