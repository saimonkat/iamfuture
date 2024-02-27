"use client";
import { useEffect, useRef, useState } from "react";
import { Coins } from "../Coins";
import { Percent } from "../Percent";
import { AIAbilities } from "./consts";

interface SectionProps {
  sectionRef: React.RefObject<HTMLDivElement> | null;
  lineWrapperRef?: React.RefObject<HTMLDivElement>;
  lineRef?: React.RefObject<HTMLDivElement>;
}

const Chain: React.FC<SectionProps> = ({
  lineWrapperRef,
  lineRef,
  sectionRef,
}) => {
  const width = typeof window !== "undefined" ? window.innerWidth : 0;

  const progressWrapper = useRef<HTMLDivElement | null>(null);
  const progressWrapperLablet = useRef<HTMLDivElement | null>(null);
  const [scrollPercentage, setScrollPercentage] = useState<number>(0);

  useEffect(() => {
    if (width < 768) {
      const progressWrapperEl = progressWrapper.current;
      const handleScroll = () => {
        if (progressWrapperEl) {
          const { scrollLeft, scrollWidth, clientWidth } = progressWrapperEl;
          if (
            scrollWidth !== undefined &&
            clientWidth !== undefined &&
            scrollLeft !== undefined &&
            scrollWidth > 0 &&
            clientWidth > 0
          ) {
            const newScrollPercentage =
              (scrollLeft / (scrollWidth - clientWidth)) * 100;
            setScrollPercentage(newScrollPercentage);
          }
        }
      };

      if (progressWrapperEl)
        progressWrapperEl.addEventListener("scroll", handleScroll);

      return () => {
        if (progressWrapperEl) {
          progressWrapperEl.removeEventListener("scroll", handleScroll);
        }
      };
    }
  }, []);

  useEffect(() => {
    if (width >= 768) {
      const progressWrapperLabletEL = progressWrapperLablet.current;

      const handleScroll = () => {
        if (progressWrapperLabletEL) {
          const { scrollLeft, scrollWidth, clientWidth } =
            progressWrapperLabletEL;
          if (
            scrollWidth !== undefined &&
            clientWidth !== undefined &&
            scrollLeft !== undefined &&
            scrollWidth > 0 &&
            clientWidth > 0
          ) {
            const newScrollPercentage =
              (scrollLeft / (scrollWidth - clientWidth)) * 100;
            setScrollPercentage(newScrollPercentage);
          }
        }
      };

      if (progressWrapperLabletEL)
        progressWrapperLabletEL.addEventListener("scroll", handleScroll);

      return () => {
        if (progressWrapperLabletEL) {
          progressWrapperLabletEL.removeEventListener("scroll", handleScroll);
        }
      };
    }
  }, []);

  return (
    <div className="xl:pl-20" ref={sectionRef}>
      <div
        className="mt-20 flex flex-col md:overflow-x-auto xl:overflow-x-visible"
        ref={progressWrapperLablet}
      >
        <div className="md:flex md:gap-[117px] md:flex-col xl:flex xl:flex-row xl:justify-between xl:gap-0">
          <div className="flex max-w-3xl flex-shrink-0 flex-col md:items-start">
            <h2 className="mx-auto w-fit bg-brand-gradient bg-clip-text text-center text-4.8xl font-bold leading-[110%] text-transparent md:mx-0 md:text-left md:text-5xl xl:mx-0 xl:max-w-none xl:text-left xl:text-5.5xl">
              Prediction <br className="md:hidden xl:hidden" /> Examples
            </h2>
            <p className="min-w-1012 mt-5 max-w-2xl text-center text-1.6xl font-normal md:mt-3 md:max-w-[480px] md:text-left md:text-lg xl:mt-4 xl:text-left xl:text-base">
              Our in-house built predictive hybrid engine incorporating
              generative AI and ML algorithms enables users:
            </p>
            <ul className="mt-4 hidden list-inside list-disc space-y-2 marker:text-[#b0ecff] dark:marker:text-[#9f9f9f] xl:block">
              {AIAbilities.map((ability, index) => (
                <li key={index}>{ability}</li>
              ))}
            </ul>
          </div>
          <Percent className="hidden md:flex xl:flex" />
        </div>
        <div
          className="mt-12.5 flex flex-col overflow-x-auto md:mt-16 md:overflow-x-visible xl:mt-23"
          ref={progressWrapper}
        >
          <Coins
            coinslineWrapperRef={lineWrapperRef}
            coinslineRef={lineRef}
            scrollPercentage={scrollPercentage}
          />
        </div>
      </div>
    </div>
  );
};
export default Chain;
