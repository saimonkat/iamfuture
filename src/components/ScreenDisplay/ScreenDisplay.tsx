"use client";
import { useMediaQuery } from "@/hooks";
import React from "react";

interface ScreenDisplayProps {
  desktop: React.ReactElement;
  mobile: React.ReactElement;
}

const ScreenDisplay = ({ desktop, mobile }: ScreenDisplayProps) => {
  const isDesktop = useMediaQuery("(min-width: 1280px)");

  if (isDesktop) return desktop;

  return mobile;
};

export default ScreenDisplay;
