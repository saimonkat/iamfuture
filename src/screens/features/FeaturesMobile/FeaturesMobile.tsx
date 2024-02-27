"use client";
import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { HeaderContext } from "@/app/Context";

import ProgressBarHeader from "./ProgressBarHeader";
import SectionsContent from "./SectionsContent";

interface FeaturesMobileProps {
  className?: string;
}

const FeaturesMobile = ({ className }: FeaturesMobileProps) => {
  const [headerTitle, setHeaderTitle] = useState("Concept");
  const [headerHeight, setHeaderHeight] = useState(77.1);
  const { headerRef } = useContext(HeaderContext);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const progressBarHeaderRef = useRef<HTMLDivElement | null>(null);
  // Section containers
  const conceptContainerRef = useRef<HTMLDivElement | null>(null);
  const walletContainerRef = useRef<HTMLDivElement | null>(null);
  const forecastContainerRef = useRef<HTMLDivElement | null>(null);
  const tokenContainerRef = useRef<HTMLDivElement | null>(null);
  const strategyContainerRef = useRef<HTMLDivElement | null>(null);

  const sectionsData = useMemo(() => {
    return [
      { ref: conceptContainerRef, title: "Concept" },
      { ref: walletContainerRef, title: "Wallet" },
      { ref: forecastContainerRef, title: "Forecast" },
      { ref: tokenContainerRef, title: "Token" },
      { ref: strategyContainerRef, title: "IamF Governance Strategy" },
    ];
  }, [
    conceptContainerRef,
    walletContainerRef,
    forecastContainerRef,
    tokenContainerRef,
    strategyContainerRef,
  ]);

  const requestRef = useRef<number | null>(null);

  const computeTargetProgressValues = (targetNode: HTMLDivElement) => {
    const documentHeight = document.body.offsetHeight;
    const scrollTop = window.scrollY;
    const { top, height, bottom } = targetNode.getBoundingClientRect();
    const targetOffset = top + scrollTop - headerHeight;
    const distanceFromTop = scrollTop - targetOffset;

    if (bottom + scrollTop - documentHeight < 0) {
      return distanceFromTop / (height / 100) >= 100
        ? 100
        : distanceFromTop / (height / 100) <= 0
          ? 0
          : distanceFromTop / (height / 100);
    } else
      return (
        100 *
        ((scrollTop - targetOffset) /
          (documentHeight - targetOffset - window.innerHeight))
      );
  };

  const handleProgressBar = (targetNode: HTMLDivElement) => {
    const documentHeight = document.body.offsetHeight;
    const scrollTop = window.scrollY;

    const progressPercentage = targetNode
      ? computeTargetProgressValues(targetNode)
      : 100 * (scrollTop / (documentHeight - window.innerHeight));

    if (progressPercentage > 0 && progressPercentage < 99) {
      headerRef?.current?.classList.add(
        "bg-blue-primary-900",
        "transition-colors",
      );
    } else {
      headerRef?.current?.classList.remove("bg-blue-primary-900");
    }
    if (progressBarRef.current)
      progressBarRef.current.style.transform = `translateX(${
        progressPercentage - 100
      }%`;
  };

  const loop = () => {
    if (containerRef.current) handleProgressBar(containerRef.current);
    if (requestRef) requestRef.current = requestAnimationFrame(loop);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(loop);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const observers = sectionsData.map(({ ref, title }) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setHeaderTitle((prevTitle) => {
              if (prevTitle !== title) return title;
              return prevTitle;
            });
          }
        },
        {
          threshold: 0.3, // Trigger when any part of the element is visible
        },
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [sectionsData]);

  useEffect(() => {
    const currentHeaderH = headerRef?.current?.clientHeight;
    if (currentHeaderH) setHeaderHeight(currentHeaderH);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerRef?.current?.clientHeight]);

  useEffect(() => {
    const headerHeight = headerRef?.current?.clientHeight;
    const progressBarHeaderHeight = progressBarHeaderRef.current?.clientHeight;
    const progressBarHeight = progressBarRef.current?.clientHeight;

    if (headerHeight && progressBarHeaderHeight && progressBarHeight) {
      const marginTop =
        headerHeight + progressBarHeaderHeight + progressBarHeight;

      sectionsData.map(({ ref }) => {
        if (ref.current)
          ref.current.style.scrollMarginTop = `${marginTop / 16}rem`;
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    headerRef?.current?.clientHeight,
    progressBarHeaderRef.current?.clientHeight,
    progressBarRef.current?.clientHeight,
    sectionsData,
  ]);

  return (
    <div className="relative" ref={containerRef}>
      <ProgressBarHeader
        progressBarHeaderRef={progressBarHeaderRef}
        headerHeight={headerHeight}
        headerTitle={headerTitle}
        progressBarRef={progressBarRef}
      />
      <SectionsContent
        className={className}
        conceptContainerRef={conceptContainerRef}
        walletContainerRef={walletContainerRef}
        forecastContainerRef={forecastContainerRef}
        tokenContainerRef={tokenContainerRef}
        strategyContainerRef={strategyContainerRef}
      />
    </div>
  );
};

export default FeaturesMobile;
