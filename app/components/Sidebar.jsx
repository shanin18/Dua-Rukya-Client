import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";
import homeSVG from "../svgs/home.svg";
import menuSVG from "../svgs/menu.svg";
import memorizeSVG from "../svgs/memorize.svg";
import bookmarkSVG from "../svgs/bookmark.svg";
import jarSVG from "../svgs/jar.svg";
import chatSVG from "../svgs/chat.svg";
import bookSVG from "../svgs/book.svg";
import supportSVG from "../svgs/support.svg";

const Sidebar = () => {
  // Define navigation items with their respective links and icons
  const navItems = [
    { name: "home", href: "/", svg: homeSVG },
    { name: "menu", href: "/menu", svg: menuSVG },
    { name: "memorize", href: "/memorize", svg: memorizeSVG },
    { name: "bookmark", href: "/bookmark", svg: bookmarkSVG },
    { name: "jar", href: "/jar", svg: jarSVG },
    { name: "chat", href: "/chat", svg: chatSVG },
    { name: "book", href: "/book", svg: bookSVG },
  ];

  return (
    <>
      {/* Large screen sidebar */}
      <div className="hidden xl:flex flex-col justify-between items-center py-5 px-1 bg-white rounded-3xl mr-8 h-full overflow-y-auto">
        <div>
          {/* Logo */}
          <Link href="/">
            <Image src={logo} width={80} quality={100} alt="logo" />
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center flex-grow">
          {/* Navigation items */}
          <ul className="space-y-5">
            {navItems.map((item, idx) => (
              <li key={idx}>
                {/* Each navigation item */}
                <Link href={item.href} aria-label={item.name}>
                  <div className="bg-[#e8f0f5] rounded-full w-[38px] h-[38px] flex items-center justify-center hover:scale-110 duration-200">
                    <Image src={item.svg} quality={100} alt={item.name} />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          {/* Support button */}
          <Link href="#">
            <Image src={supportSVG} quality={100} alt="support-btn" />
          </Link>
        </div>
      </div>

      {/* Mobile screen sidebar */}
      <div className="p-5 bg-white rounded-tl-3xl rounded-tr-3xl shadow-2xl fixed bottom-0 w-full xl:hidden z-30">
        <ul className="flex items-center justify-between">
          {/* Render only first 5 navigation items */}
          {navItems.slice(0, 5).map((item, idx) => (
            <li key={idx}>
              {/* Each navigation item */}
              <Link href={item.href} aria-label={item.name}>
                <div className="md:bg-[#e8f0f5] rounded-full w-8 h-8 p-1 md:p-0 md:w-[38px] md:h-[38px] flex items-center justify-center hover:scale-110 duration-200">
                  <Image src={item.svg} quality={100} alt={item.name} />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
