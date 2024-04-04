"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsCategoriesOpen } from "../redux/features/categoriesButton/categoriesButtonSlice";
import { setIsOpen } from "../redux/features/settingsButton/settingsButtonSlice";
import languageSVG from "@/app/svgs/language.svg";
import generalSVG from "@/app/svgs/general.svg";
import menuSVG from "@/app/svgs/menu.svg";
import arrowDownSVG from "@/app/svgs/arrowDown.svg";

const Settings = () => {
  // Get isOpen state from Redux store
  const { isOpen } = useSelector((state) => state.settingsButton);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1280) {
        dispatch(setIsCategoriesOpen(true));
        dispatch(setIsOpen(true));
      }
    };

    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch]);

  return (
    <div
      className={`bg-white rounded-xl overflow-hidden p-4 ml-2 z-40 duration-500 absolute xl:static ${
        isOpen ?  "-right-[300px] top-0" : "right-0 top-0"
      } flex flex-col h-full shadow-lg`}
      style={{ maxWidth: "300px" }}
    >
      <div className="flex items-center justify-between xl:justify-center mt-4 mb-8">
        <button onClick={()=> dispatch(setIsOpen(true))}>
        <div className="border -rotate-90 p-2 rounded-full w-8 h-8 text-center flex items-center justify-center xl:hidden"><Image src={arrowDownSVG} alt="icon" /></div>
        </button>
        <h2 className="text-center text-xl font-medium">Settings</h2>
      </div>

      <div className="border border-t-0 rounded-xl mb-4">
        {/* Language Settings */}
        <Link href="#">
          <div className="flex items-center gap-4 bg-[#f7f8fa] p-3 rounded-lg border-l-4 border-[#1FA45B] cursor-pointer">
            <div className="md:bg-[#e8f0f5] rounded-full w-8 h-8 p-1 md:p-0 md:w-[38px] md:h-[38px] flex items-center justify-center hover:scale-110 duration-200">
              <Image src={languageSVG} quality={100} alt="language_icon" />
            </div>
            <p className="font-medium text-[#1FA45B] cursor-pointer">
              Language Settings
            </p>
          </div>
        </Link>

        {/* Language options */}
        <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-3 p-6">
          <button className="w-full my-btn my-btn-primary cursor-pointer">
            English
          </button>
          <button className="w-full my-btn cursor-pointer">বাংলা</button>
        </div>
      </div>

      {/* Other Settings */}
      <div className="space-y-4 flex-1 overflow-y-auto">
        {/* General Settings */}
        <div>
          <Link href="#">
            <div className="flex items-center gap-4 bg-[#f7f8fa] p-3 rounded-lg cursor-pointer">
              <div className="md:bg-[#e8f0f5] rounded-full w-8 h-8 p-1 md:p-0 md:w-[38px] md:h-[38px] flex items-center justify-center hover:scale-110 duration-200">
                <Image src={generalSVG} quality={100} alt="general_icon" />
              </div>
              <p className="font-medium text-gray-500 cursor-pointer">
                General Settings
              </p>
            </div>
          </Link>
        </div>

        {/* Font Settings */}
        <div>
          <Link href="#">
            <div className="flex items-center gap-4 bg-[#f7f8fa] p-3 rounded-lg cursor-pointer">
              <div className="md:bg-[#e8f0f5] rounded-full w-8 h-8 p-1 md:p-0 md:w-[38px] md:h-[38px] flex items-center justify-center hover:scale-110 duration-200">
                <Image src={menuSVG} quality={100} alt="menu_icon" />
              </div>
              <p className="font-medium text-gray-500 cursor-pointer">
                Font Settings
              </p>
            </div>
          </Link>
        </div>

        {/* Appearance Settings */}
        <div>
          <Link href="#">
            <div className="flex items-center gap-4 bg-[#f7f8fa] p-3 rounded-lg cursor-pointer">
              <div className="md:bg-[#e8f0f5] rounded-full w-8 h-8 p-1 md:p-0 md:w-[38px] md:h-[38px] flex items-center justify-center hover:scale-110 duration-200">
                <Image src={generalSVG} quality={100} alt="appearance_icon" />
              </div>
              <p className="font-medium text-gray-500 cursor-pointer">
                Appearance Settings
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Settings;
