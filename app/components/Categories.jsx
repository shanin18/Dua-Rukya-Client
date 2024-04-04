"use client"; // Ensure this module is client-side only
import Image from "next/image";
import { useState } from "react";
import glassSVG from "@/app/svgs/glass.svg";
import crossSVG from "@/app/svgs/cross.svg";
import notFoundSVG from "@/app/svgs/no-data-found.svg";
import { useDispatch, useSelector } from "react-redux";
import { setIsCategoriesOpen } from "../redux/features/categoriesButton/categoriesButtonSlice";
import CategoryCard from "./CategoryCard";

const Categories = ({ categories }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { isCategoriesOpen } = useSelector((state) => state.categoriesButton);
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredCategories = categories.filter((category) =>
    category.cat_name_en.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      className={`bg-white rounded-xl w-full md:w-[450px] lg:w-[350px] z-40 overflow-hidden pb-8 mr-6 duration-500 absolute xl:static ${
        isCategoriesOpen ? "-left-[1000px] top-0" : "left-0 top-0"
      } flex flex-col h-full shadow-lg`}
    >
      <div className="p-4 bg-[#1FA45B] text-white flex xl:block items-center justify-between">
        <h2 className="xl:text-center text-lg">Categories</h2>
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
          className="input pl-12 w-full bg-white focus:border-2 focus:border-[#1FA45B] placeholder:text-gray-500 shadow-sm border-gray-200"
          style={{ outline: "none" }}
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <div className="absolute top-1 left-1 w-10 h-10 flex items-center justify-center rounded-lg">
          <Image src={glassSVG} alt="magnifying_glass" />
        </div>
      </div>

      <div className="p-3 overflow-y-scroll space-y-5 flex-1">
        {filteredCategories.length === 0 ? (
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
          filteredCategories.map((category, idx) => (
            <CategoryCard key={idx} category={category} />
          ))
        )}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  try {
    const res = await fetch("http://localhost:8000/categories");
    const categories = await res.json();

    const categoriesWithSubcategories = await Promise.all(
      categories.map(async (category) => {
        const subRes = await fetch(
          `http://localhost:8000/sub-categories?cat_id=${category.cat_id}`
        );
        const subcategories = await subRes.json();
        return { ...category, subcategories };
      })
    );

    return {
      props: {
        categories: categoriesWithSubcategories,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        categories: [],
      },
    };
  }
}

export default Categories;
