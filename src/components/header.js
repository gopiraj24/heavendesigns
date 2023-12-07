import React from "react";
import { Link } from "gatsby";

import Logo from "../images/logos/logo-dark.svg";
import Button from "./button";
import About from "./about";

const Header = () => {
  const navigation = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Our Work", href: "#works" },
  ];
  return (
    <header>
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-5">
          <div className="flex flex-row items-center gap-8">
            <Link to="/">
              {/* <img className="w-auto h-8" src={Logo} alt="Logo" /> */}
              <p className="h-8 font-semibold text-display-sm text-primary-600">Heaven Designs</p>
            </Link>
          </div>
          <div className="flex flex-row gap-6">
            <div className="flex-row items-center hidden gap-4 md:flex">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-4 font-medium text-body-sm text-neutral-700 hover:text-primary-600">
                  {item.name}
                </a>
              ))}
            </div>
            <Button label="CONTACT US" link="#" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
