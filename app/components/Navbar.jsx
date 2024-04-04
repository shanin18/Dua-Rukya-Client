import Image from "next/image";
import Link from "next/link";
import SettingsButton from "./SettingsButton";
import profile from "@/app/svgs/profile.svg";
import glass from "@/app/svgs/glass.svg";
import arrowDown from "@/app/svgs/arrowDown.svg";
import logo from "@/public/logo.png";

const Navbar = () => {
  return (
    <>
      {/* Navbar large */}
      <nav className="navbar pb-5 hidden xl:flex h-fit">
        <div className="flex-1">
          <h1 className="text-2xl font-medium">Duas Page</h1>
        </div>
        <div className="flex-none gap-2">
          <div className="relative mr-[250px]">
            {/* Search Input */}
            <input
              type="text"
              placeholder="Search by Dua Name"
              className="input pr-16 w-24 md:w-auto focus:border-[#1FA45B] placeholder:text-sm placeholder:text-gray-500"
              style={{ outline: "none" }}
            />
            <div className="absolute top-1 right-1 bg-[#ebeef2] w-14 h-10 flex items-center justify-center rounded-lg">
              <Image src={glass} alt="magnifying_glass" />
            </div>
          </div>
          {/* Profile Dropdown */}
          <div className="dropdown dropdown-bottom dropdown-end flex items-center gap-4">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <Image src={profile} alt="profile" />
              </div>
            </div>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Navbar medium */}
      <nav className="navbar justify-between bg-white fixed w-screen top-0 hidden md:flex xl:hidden shadow-lg z-30">
        <div className="space-x-2 flex items-center justify-center">
          <Image src={logo} width={75} alt="logo" />
          <h1 className="text-2xl font-medium">Dua & Ruqyah</h1>
        </div>
        <div className="space-x-6">
          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search by Dua Name"
              className="input pr-16 w-32 md:w-auto bg-[#ebeef2] focus:border-[#1FA45B] placeholder:text-sm placeholder:text-gray-500"
              style={{ outline: "none" }}
            />
            <div className="absolute top-1 right-1 bg-white w-14 h-10 flex items-center justify-center rounded-lg">
              <Image src={glass} alt="magnifying_glass" />
            </div>
          </div>
          {/* Settings Button */}
          <SettingsButton />
          {/* Profile Dropdown */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <Image src={profile} alt="profile" />
              </div>
            </div>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Navbar small */}
      <nav className="navbar justify-between md:hidden px-4">
        <div>
          <Link href="#">
            <h1 className="text-xl">Duas Page</h1>
          </Link>
        </div>
        {/* Settings Button */}
        <SettingsButton />
      </nav>
    </>
  );
};

export default Navbar;
