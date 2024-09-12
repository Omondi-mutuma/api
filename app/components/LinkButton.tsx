import Link from "next/link";
import React from "react";
import { ButtonProps } from "../types/definitions";

const LinkButton = ({ label, icon: Icon, href }: ButtonProps) => {
  return (
    <button className="bg-white mt-6 text-yellow-600 flex gap-2 items-center font-medium hover:text-black transition-colors">
      <Link href={href}>{label}</Link>
      {Icon && <Icon className="hover:text-black" />}
    </button>
  );
};

export default LinkButton;
