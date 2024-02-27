"use client";
import React, { useEffect, useRef } from "react";
import { Container } from "@/components/Container";
import { Intro } from "./Intro";
import { Team } from "./Team";
import { Interested } from "./Interested";
import { Form } from "./Form";
import { Join } from "./Join";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeaderContext } from "@/app/Context";

gsap.registerPlugin(ScrollTrigger);

interface SectionProps {
  sectionRef?: React.RefObject<HTMLDivElement>;
}

const About: React.FC<SectionProps> = ({ sectionRef }) => {
  const { setActiveHeader } = React.useContext(HeaderContext);

  const introRef = useRef<HTMLDivElement | null>(null);
  const teamRef = useRef<HTMLDivElement | null>(null);
  const interestedRef = useRef<HTMLDivElement | null>(null);
  const formRef = useRef<HTMLDivElement | null>(null);
  const joinRef = useRef<HTMLDivElement | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const lineWrapperRef = useRef<HTMLDivElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sectionsRefs = [introRef, teamRef, interestedRef, formRef, joinRef];
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
      if (window.innerWidth < 1280) {
      } else {
        gsap.to(progressWrapper, {
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: scrollContainer,
            start: "top top",
            end: () => "+=" + scrollContainer.offsetWidth,
            scrub: 2,
            onUpdate: (self) => {
              const progressValue = self.progress;
              const progressBarWidth = progressValue * 100;

              if (progressBarWidth > 90) {
                setActiveHeader(true);
              } else if (progressBarWidth > 0) {
                progressWrapper.style.height = "8px";
                progressWrapper.style.visibility = "visible";
                progressWrapper.style.opacity = "1";
                setActiveHeader(false);
              } else {
                progressWrapper.style.height = "0";
                progressWrapper.style.visibility = "hidden";
                progressWrapper.style.opacity = "0";
                setActiveHeader(true);
              }

              progress.style.width = `${progressBarWidth}%`;
            },
          },
        });
      }

      let params: number;
      let paramsX: number;

      if (window.innerWidth < 1280) {
        params = 0;
        paramsX = 0;
      } else {
        params = scrollContainer.offsetWidth;
        paramsX = scrollContainer.offsetWidth - totalWidth;
      }

      gsap.to(sections, {
        id: "aboutUsTween",
        x: () => paramsX,
        ease: "none",
        scrollTrigger: {
          trigger: scrollContainer,
          start: "top top",
          end: () => "+=" + params,
          // end: "bottom center",
          scrub: 2,
          pin: true,
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [introRef, teamRef, interestedRef, formRef, joinRef]);

  return (
    <div ref={sectionRef} className="xl:overflow-auto" id="aboutUs">
      <div
        className="pointer-events-none fixed top-0 z-50 h-0 w-full bg-blue-primary-600 transition-all"
        ref={lineWrapperRef}
      >
        <div
          className="flex h-full w-6 bg-brand-gradient transition-all"
          ref={lineRef}
        ></div>
      </div>
      <Container>
        <div className="relative flex h-full w-full" ref={scrollContainerRef}>
          <Intro sectionRef={introRef} />
          <Team sectionRef={teamRef} />
          <Interested sectionRef={interestedRef} />
          <Form sectionRef={formRef} />
          <Join sectionRef={joinRef} />
        </div>
      </Container>
    </div>
  );
};

export default About;
