import Image from "next/image";
import { navLinks } from "../constants/index.c";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <header className="w-full border-b-2 border-gray-50">
      <nav className="w-full h-full">
        <ul className="w-full h-full grid grid-cols-[1fr_2fr] md:grid-cols-[1fr_1fr_2fr_1fr_1fr] text-center">
          {navLinks.map((link, index) => (
            <li key={index} className={link.style}>
              {link.isLogo ? (
                <Image
                  src={link.logo}
                  alt="Company logo"
                  width={64}
                  height={40}
                />
              ) : (
                <a className="flex justify-center items-center">{link.name}</a>
              )}
            </li>
          ))}
          <div className="flex md:hidden justify-end items-center p-4">
            <RxHamburgerMenu className=" text-3xl text-center" />
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
