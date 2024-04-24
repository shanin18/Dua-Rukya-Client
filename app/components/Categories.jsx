"use client"; // Ensure this module is client-side only
import Image from "next/image";
import { useEffect, useState } from "react";
import glassSVG from "@/app/svgs/glass.svg";
import crossSVG from "@/app/svgs/cross.svg";
import notFoundSVG from "@/app/svgs/no-data-found.svg";
import { useDispatch, useSelector } from "react-redux";
import { setIsCategoriesOpen } from "../redux/features/categoriesButton/categoriesButtonSlice";
import CategoryCard from "./CategoryCard";
import { useGetCategoriesQuery } from "../redux/api/baseApi";
import Spinner from "./Spinner";

const Categories = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const { isCategoriesOpen } = useSelector((state) => state.categoriesButton);
  const dispatch = useDispatch();

  const {
    data: categories,
    isLoading,
    isError,
    error,
  } = useGetCategoriesQuery();

  if (isError) {
    console.log(error);
  }

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredCategories = categories?.filter((category) =>
    category.cat_name_en.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      className={`bg-white rounded-xl w-full md:w-[450px] lg:w-[350px] z-40 overflow-hidden pb-8 mr-6 duration-700 absolute xl:static ${
        isCategoriesOpen ? "-left-[1000px] top-0" : "left-0 top-0"
      } flex flex-col h-full shadow-lg`}
    >
      <div className="p-4 bg-[#1FA45B] text-white flex xl:block items-center justify-between">
        <h2 className="xl:text-center ">Categories</h2>
        <button
          className="xl:hidden"
          onClick={() => dispatch(setIsCategoriesOpen(true))}
        >
          <Image src={crossSVG} alt="cross_icon" />
        </button>
      </div>

      <div className="relative mt-4 m-2">
        <input
          type="text"
          placeholder="Search Categories"
          className="input pl-12 w-full bg-white focus:border-2 focus:border-[#1FA45B] placeholder:text-sm placeholder:text-gray-500 shadow-sm border-gray-200"
          style={{ outline: "none" }}
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <div className="absolute top-1 left-1 w-10 h-10 flex items-center justify-center rounded-md">
          <Image src={glassSVG} alt="magnifying_glass" />
        </div>
      </div>

      <div className="p-3 overflow-y-scroll space-y-5 flex-1 relative">
        {isLoading ? (
          <div className="absolute top-40 left-40">
            <Spinner />
          </div>
        ) : filteredCategories?.length === 0 ? (
          <div className="h-full overflow-hidden">
            <p className="text-[#1FA45B] font-medium text-sm">
              Search Results:
            </p>
            <div className="flex flex-col items-center justify-center space-y-9 h-full">
              <Image src={notFoundSVG} width={100} alt="not_found" />
              <p className="text-xl font-medium">No Result Found</p>
            </div>
          </div>
        ) : (
          filteredCategories?.map((category, idx) => (
            <CategoryCard key={idx} category={category} />
          ))
        )}
      </div>
    </div>
  );
};

export default Categories;
