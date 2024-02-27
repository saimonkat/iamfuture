"use client";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { CoinsList } from "./const";

interface Coins {
  coinslineWrapperRef?: React.RefObject<HTMLDivElement>;
  coinslineRef?: React.RefObject<HTMLDivElement>;
  scrollPercentage:number;
}

const Coins: React.FC<Coins> = ({ coinslineWrapperRef, coinslineRef, scrollPercentage }) => {
  const containerRef = useRef<HTMLUListElement | null>(null);
  const progressBar = useRef<HTMLDivElement | null>(null);
  const progressWrapper = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (
      containerRef.current &&
      progressBar.current &&
      progressWrapper.current
    ) {
      const containerWidth = containerRef.current.scrollWidth;
      progressWrapper.current.style.width = `${containerWidth}px`;
    }
  }, []);

  useEffect(() => {
    if (progressBar.current) {
      progressBar.current.style.width = `${scrollPercentage}%`;
    }
  }, [scrollPercentage]);

  return (
    <div className="relative">
      <div className="absolute top-25 hidden w-full xl:flex">
        <div
          className="flex h-2 w-full rounded-md bg-blue-primary-600 transition-all"
          ref={coinslineWrapperRef}
        >
          <div
            className="flex h-full w-6 rounded-md bg-brand-gradient transition-all"
            ref={coinslineRef}
          ></div>
        </div>
      </div>
      <div
        className="absolute top-25 flex w-full xl:hidden"
        ref={progressWrapper}
      >
        <div className="flex h-2 w-full rounded-md bg-blue-primary-600 transition-all">
          <div
            className="flex h-full w-6 rounded-md bg-brand-gradient transition-all"
            ref={progressBar}
          ></div>
        </div>
      </div>
      <ul className="mb-6 flex gap-3.75 xl:gap-14" ref={containerRef}>
        {CoinsList.map((coins, index) => (
          <li
            className="flex flex-col items-start gap-[7.75vh] xl:gap-25"
            key={index}
          >
            <div className="flex items-center space-x-5 xl:space-x-4">
              <div
                className={cn(
                  "h-17.5 w-17.5 rounded-full bg-[#ffb65e] dark:bg-blue-primary-300 dark:text-blue-primary-900 md:h-14 md:w-14 xl:h-14 xl:w-14",
                  coins.iconContainerClassName,
                )}
              >
                {coins.icon}
              </div>
              <div className="g-3 flex flex-col items-start">
                <p className="text-2.5xl font-semibold md:text-1.3xl">
                  {coins.name}
                </p>
                <span className="font-normal text-blue-primary-300">
                  {coins.chain}
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 rounded-lg bg-blue-primary-800 px-5 py-5 md:px-8 md:py-10">
              <div className="relative h-[45vw] w-[81vw] md:h-[45.6vw] md:w-[80vw] xl:h-[29.6vh] xl:w-[50.3vh]">
                {coins.graph}
              </div>
              <p className="text hidden text-sm text-blue-primary-300 md:block">
                {coins.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Coins;
