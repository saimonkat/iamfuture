import { Button } from "@/UI/button";
import { Icons } from "@/components/icons";

import AnimatedWord from "../Team/AnimatedWord";
import { CTAHeading } from "../Team/const";
import React from "react";
import { contactLinks } from "@/constants/contactLinks";
import ImgWithFallback from "@/hoc/ImgWithFallback";

interface SectionProps {
  sectionRef?: React.RefObject<HTMLDivElement>;
}

const Intro: React.FC<SectionProps> = ({ sectionRef }) => {
  return (
    <div
      className="relative min-w-full flex h-fit flex-col justify-between gap-12 md:gap-16 xl:h-screen"
      ref={sectionRef}
      id='intro'
    >
      <div className="mb-0 mt-0 items-center xl:mb-20 xl:mt-20 ">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-10 xl:flex-row xl:gap-10">
          <div className="flex items-center gap-6">
            <div className="h-[97px] w-[95px] shrink-0 md:h-[142px] md:w-[142px] xl:h-[202px] xl:w-[202px]">
              <ImgWithFallback
                src={"/images/Logo.webp"}
                fallback={"/images/Logo.png"}
                width={202}
                height={207}
                alt={"logo"}
              />
            </div>
            <h2
              className="flex w-fit bg-brand-gradient bg-clip-text text-4xl font-bold leading-[110%] text-transparent md:hidden xl:hidden xl:text-5.5xl">
              IamF Project
            </h2>
          </div>
          <div>
            <h2
              className="mb-4 hidden w-fit bg-brand-gradient bg-clip-text text-4xl font-bold leading-[110%] text-transparent md:flex md:text-5xl xl:flex xl:text-5.5xl">
              IamF Project
            </h2>
            <p className="min-w-1012 mb-8 max-w-5xl text-lg font-normal xl:text-xl">
              Catering to both experienced crypto enthusiasts and those
              navigating the space for the first time, I am Future offers a
              feature rich, secure and intuitive ecosystem where financial
              freedom and wealth creation are in the palm of your hand.
            </p>
            <a rel="noreferrer" target="_blank" href={contactLinks.notion}>
              <Button
                variant="gradient"
                size="lg"
                className="flex min-h-fit w-fit items-center gap-1.5 px-6 py-4 text-base font-bold"
              >
                Learn More <Icons.Arrow className="" />
              </Button>
            </a>
          </div>
        </div>
      </div>
      <div className="ml-0 flex items-center xl:ml-16">
        <div className="mb-0 flex items-center gap-30">
          <div className="flex rounded-xxxl bg-brand-gradient p-1">
            <div
              className="z-10 flex rounded-xxxl bg-blue-primary-900 px-5 py-2 md:px-10 md:py-3 xl:py-7 xl:pl-14 xl:pr-14">
              <div
                className="flex whitespace-nowrap bg-brand-gradient bg-clip-text text-3.4xl font-semibold leading-[110%] text-transparent first-letter:z-10 md:text-5xl xl:text-7.5xl xl:font-bold xl:leading-25">
                I am
              </div>
            </div>
          </div>
        </div>
        <div
          className="ml-5 flex w-fit items-center font-dancing_script text-4.4xl text-blue-primary-300 md:text-5.5xl xl:ml-[104px] xl:h-40 xl:text-8.5xl xl:text-blue-primary-600">
          <AnimatedWord />
        </div>
      </div>
      <div className="mb-5 flex">
        <div className="flex flex-col gap-8 xl:flex-shrink-0 xl:gap-10">
          <p className="text-2.4xl font-semibold leading-[110%] tracking-[0.5px] xl:text-2.5xl">
            Send, receive, swap - all with just a few taps!
          </p>
          <ul
            className="flex flex-wrap justify-between gap-x-6 gap-y-8 md:justify-start xl:grid xl:grid-cols-[repeat(5,22vh)] xl:gap-x-0 xl:gap-y-8">
            {CTAHeading.map((cta, index) => (
              <li
                className="flex w-[calc(50%-14px)] flex-col items-start gap-6 md:w-[calc(33%-16px)] md:gap-4 xl:w-full xl:max-w-[22vh]"
                key={index}
              >
                <div className="rounded-lg bg-blue-primary-600 p-3.5">
                  <div className="h-9 w-9 dark:grayscale">{cta.icon}</div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="flex flex-col gap-1 text-blue-primary-300">
                    {cta.title}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Intro;
