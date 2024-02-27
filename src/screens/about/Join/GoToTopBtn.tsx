"use client";
import { Button } from "@/UI/button";
import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

interface GoToTopBtnProps {
  className?: string;
  onClick?: () => void;
}

const GoToTopBtn = ({
  className,
  onClick,
  children,
}: PropsWithChildren<GoToTopBtnProps>) => {
  const scrollToTop = () => {
    if (window) window.scrollTo({ top: 0, left: 0 });
    if (onClick) onClick();
  };

  return (
    <Button
      variant="ghost"
      className={cn(
        "h-auto px-6 py-5 text-base font-bold hover:text-white xl:px-5 xl:py-4",
        className,
      )}
      onClick={scrollToTop}
    >
      {children}
    </Button>
  );
};

export default GoToTopBtn;
