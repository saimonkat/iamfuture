"use client";
import React, { useEffect, useRef, useState } from "react";
import { Container } from "@/components/Container";
import { PhoneFrame } from "@/components/PhoneFrame";
import { cn } from "@/lib/utils";
import { HeaderContext } from "@/app/Context";

import {
  phoneFramePropsConcept,
  phoneFramePropsWallet,
  phoneFramePropsForecast,
  phoneFramePropsToken,
} from "./const";
import { Concept } from "./Concept";
import { Wallet } from "./Wallet";
import { Forecast } from "./Forecast";
import { Token } from "./Token";
import {
  GovernanceStrategy,
  GovernanceStrategyPhone,
} from "./GovernanceStrategy";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

interface SectionProps {
  sectionRef?: React.RefObject<HTMLDivElement>;
  className?: string;
}

const Features: React.FC<SectionProps> = ({ sectionRef, className }) => {
  const { setActiveHeader } = React.useContext(HeaderContext);
  const [line, setLine] = useState<boolean>(true);

  const conceptRef = useRef<HTMLLIElement | null>(null);
  const walletRef = useRef<HTMLLIElement | null>(null);
  const forecastRef = useRef<HTMLLIElement | null>(null);
  const tokenRef = useRef<HTMLLIElement | null>(null);
  const daoRef = useRef<HTMLLIElement | null>(null);

  const scrollContainerRef = useRef<HTMLUListElement | null>(null);

  const lineWrapperRef = useRef<HTMLDivElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);

  const sectionsRefs = [conceptRef, walletRef, forecastRef, tokenRef, daoRef];

  useEffect(
    () => {
      const sections = sectionsRefs.map((ref) => ref.current);
      const scrollContainer = scrollContainerRef.current;
      const progressWrapper = lineWrapperRef.current;
      const progress = lineRef.current;

      const images = document.querySelectorAll(
        ".frame",
      ) as NodeListOf<HTMLElement>;

      if (
        scrollContainer &&
        sections.every((section) => section !== null) &&
        progress &&
        progressWrapper
      ) {
        // const sectionWidths = sections.map((section) =>
        //   section ? section.offsetWidth : 0,
        // );
        // const totalWidth = sectionWidths.reduce((acc, width) => acc + width, 0);
        let isMounted = true;

        gsap.to(progressWrapper, {
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: scrollContainer,
            start: "top top",
            end: () => "+=" + scrollContainer.offsetWidth,
            scrub: true,
            onUpdate: (self) => {
              const progressValue = self.progress;

              let activeImageIndex: number;
              if (progressValue < 0.2) {
                activeImageIndex = 0;
              } else if (progressValue < 0.4) {
                activeImageIndex = 1;
              } else if (progressValue < 0.6) {
                activeImageIndex = 2;
              } else if (progressValue < 0.8) {
                activeImageIndex = 3;
              } else {
                activeImageIndex = 4;
              }

              images.forEach((img: HTMLElement, id: number) => {
                gsap.to(img, {
                  opacity: id === activeImageIndex ? 1 : 0,
                  duration: 0.2,
                });
              });

              const progressBarWidth = progressValue * 100;
              if (progressBarWidth > 99) {
                setActiveHeader(true);
              } else if (progressBarWidth > 90) {
                setLine(false);
              } else if (progressBarWidth < 90) {
                setLine(true);
              } else if (progressBarWidth > 0) {
                setActiveHeader(false);
              } else {
                setActiveHeader(true);
                setLine(true);
              }
              progress.style.width = `${progressBarWidth}%`;
            },
          },
        });

        // const tl = gsap
        //   .timeline({
        //     id: 'fTween',
        //     scrollTrigger: {
        //       trigger: scrollContainer,
        //       pin: true,
        //       start: "top top",
        //       end: () => "+=" + scrollContainer.offsetWidth,
        //       scrub: 1,
        //       snap: 1 / (sections.length - 1),
        //       preventOverlaps: true,
        //       fastScrollEnd: true,
        //       invalidateOnRefresh: true,
        //     },
        //   })
        //   .to(sections, {
        //     x: () => scrollContainer.offsetWidth - totalWidth,
        //     ease: "none",
        //     onComplete: () => {
        //       isMounted = false;
        //       setAcitveHeader(true);
        //     },
        //   });

        // tl.progress(1).progress(0);

        gsap.to(sections, {
          id: "fTween",
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: scrollContainer,
            pin: true,
            start: "top top",
            end: () => "+=" + scrollContainer.offsetWidth,
            scrub: 1,
            snap: 1 / (sections.length - 1),
            preventOverlaps: true,
            fastScrollEnd: true,
            invalidateOnRefresh: true,
          },
          onComplete: () => {
            isMounted = false;
            setActiveHeader(true);
          },
        });

        return () => {
          if (isMounted) {
            gsap.killTweensOf(sections);
          }
        };
      }
    },
    [scrollContainerRef],
  );

  return (
    <div id="feature" className={cn("pb-20 pt-44", className)} ref={sectionRef}>
      <ul
        id="feature-container"
        className="relative flex w-full snap-x snap-mandatory"
        ref={scrollContainerRef}
      >
        <div
          className={`absolute min-w-full top-[28vh] transition-all`}
        >
          <Container>
            <div
              className={`flex h-2 rounded-md bg-blue-primary-600 transition-all ${line ? "w-10/12" : "w-8/12"}`}
              ref={lineWrapperRef}>
              <div
                className="flex h-full w-6 rounded-md bg-brand-gradient transition-all"
                ref={lineRef}
              ></div>
            </div>
          </Container>
        </div>
        <li
          className={cn(
            "flex min-w-full xl:min-h-screen shrink-0 snap-start items-center justify-between gap-7",
          )}
          key="Concept"
          ref={conceptRef}
          id="concept"
        >
          <Container className="w-full">
            <Concept />
          </Container>
        </li>
        <li
          className={cn(
            "flex min-w-full xl:min-h-screen shrink-0 snap-start items-center justify-between gap-7",
          )}
          key="Wallet"
          id="wallet"
          ref={walletRef}
        >
          <Container className="w-full">
            <Wallet />
          </Container>
        </li>
        <li
          className={cn(
            "flex min-w-full xl:min-h-screen shrink-0 snap-start items-center justify-between gap-7",
          )}
          key="Forecast"
          id="forecast"
          ref={forecastRef}
        >
          <Container className="w-full">
            <Forecast />
          </Container>
        </li>
        <li
          className={cn(
            "flex min-w-full xl:min-h-screen shrink-0 snap-start items-center justify-between gap-7",
          )}
          key="Token"
          id="token"
          ref={tokenRef}
        >
          <Container className="w-full">
            <Token />
          </Container>
        </li>
        <li
          className={cn(
            "flex min-w-full xl:min-h-screen shrink-0 snap-start items-center justify-between gap-7",
          )}
          key="DAO"
          ref={daoRef}
          id="governance-strategy"
        >
          <Container className="w-full">
            <GovernanceStrategy />
          </Container>
        </li>
        <div className="absolute right-[5vw] top-[20vh] grid grid-cols-1 grid-rows-1">
          <div className="frame col-span-full row-span-full transition-all">
            <PhoneFrame {...phoneFramePropsConcept} />
          </div>
          <div className="frame col-span-full row-span-full opacity-0 transition-all">
            <PhoneFrame {...phoneFramePropsWallet} />
          </div>
          <div className="frame col-span-full row-span-full opacity-0 transition-all">
            <PhoneFrame {...phoneFramePropsForecast} />
          </div>
          <div className="frame col-span-full row-span-full opacity-0 transition-all">
            <PhoneFrame {...phoneFramePropsToken} />
          </div>
          <div className="frame col-span-full row-span-full opacity-0 transition-all">
            <GovernanceStrategyPhone />
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Features;
