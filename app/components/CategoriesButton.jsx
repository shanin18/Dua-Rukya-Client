"use client"; // Ensure this module is client-side only
import Image from "next/image";
import React from "react";
import barsSVG from "@/app/svgs/bars.svg";
import { useDispatch, useSelector } from "react-redux";
import { setIsCategoriesOpen } from "../redux/features/categoriesButton/categoriesButtonSlice";

const CategoriesButton = () => {
  // Retrieve categories button state from Redux store
  const { isCategoriesOpen } = useSelector((state) => state.categoriesButton);
  const dispatch = useDispatch();

  // Determine the initial state based on isCategoriesOpen
  const initialState = !isCategoriesOpen;

  return (
    // Button to toggle categories visibility
    <button onClick={() => dispatch(setIsCategoriesOpen(initialState))}>
      <Image src={barsSVG} alt="menu_icon" />
    </button>
  );
};

export default CategoriesButton;
