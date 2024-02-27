"use client";
import React, { useEffect, useRef } from "react";

import { Container } from "@/components/Container";
import { Finance } from "./Finance";
import gsap from "gsap";
import { HeaderContext } from "@/app/Context";
import { Chain } from "./Chain";

interface PredictionsProps {
  className?: string;
}

const Predictions = ({ className }: PredictionsProps) => {
  const { setActiveHeader } = React.useContext(HeaderContext);

  const financeRef = useRef<HTMLDivElement | null>(null);
  const financeChain = useRef<HTMLDivElement | null>(null);

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const lineWrapperRef = useRef<HTMLDivElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sectionsRefs = [financeRef, financeChain];
    const sections = sectionsRefs.map((ref) => ref.current);
    const scrollContainer = scrollContainerRef.current;
    const progressWrapper = lineWrapperRef.current;
    const progress = lineRef.current;
    if (
      scrollContainer &&
      sections.every((section) => section !== null) &&
      progress &&
      progressWrapper
    ) {
      const totalWidth = sections.reduce(
        (acc, section) => (section ? acc + section.offsetWidth : acc),
        0,
      );

      let isMounted = true;

      gsap.to(progressWrapper, {
        y: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sections[sections.length - 1],
          start: "bottom bottom",
          end: "bottom center",
          scrub: 2,
          onUpdate: (self) => {
            const progressValue = self.progress;
            const progressBarWidth = progressValue * 100;

            if (progressBarWidth > 99) {
              setActiveHeader(true);
            } else if (progressBarWidth > 0) {
              setActiveHeader(false);
            } else {
              setActiveHeader(true);
            }

            progress.style.width = `${progressBarWidth}%`;
          },
        },
      });

      gsap.to(sections, {
        id: "documentationTween",
        x: () => scrollContainer.offsetWidth - totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: scrollContainer,
          start: "bottom bottom",
          end: "bottom center",
          scrub: 2,
          pin: true,
        },
        onComplete: () => {
          isMounted = false;
        },
      });

      return () => {
        if (isMounted) {
          gsap.killTweensOf(sections);
        }
      };
    }
  }, [financeRef, financeChain, scrollContainerRef]);
  return (
    <div className={className}>
      <Container>
        <div className="flex" id={"documentation"} ref={scrollContainerRef}>
          <Finance sectionRef={financeRef} />
          <Chain
            sectionRef={financeChain}
            lineWrapperRef={lineWrapperRef}
            lineRef={lineRef}
          />
        </div>
      </Container>
    </div>
  );
};
export default Predictions;
