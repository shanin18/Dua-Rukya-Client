"use client";

import Image from "next/image";
import React from "react";
import settings from "@/app/svgs/settings.svg";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpen } from "../redux/features/settingsButton/settingsButtonSlice";

const SettingsButton = () => {
  // Get isOpen state from Redux store
  const { isOpen } = useSelector((state) => state.settingsButton);
  const dispatch = useDispatch();

  // Determine the initial state based on isOpen
  const initialState = !isOpen;

  // Toggle the isOpen state when button is clicked
  const handleClick = () => {
    dispatch(setIsOpen(initialState));
  };

  return (
    <button onClick={handleClick}>
      <Image src={settings} alt="settings" />
    </button>
  );
};

export default SettingsButton;
