import React from "react";

import { sectionIds } from "@/constants/sectionIds";
import ImgWithFallback from "@/hoc/ImgWithFallback";

interface SectionProps {
  sectionRef?: React.RefObject<HTMLDivElement>;
}

const Interested: React.FC<SectionProps> = ({ sectionRef }) => {
  return (
    <div
      className="relative flex pb-[72px] flex-col items-center bg-blue-primary-800 pt-[208px] overflow-hidden -ml-[22px] -mr-[22px] px-[22px] md:pt-[338px] md:pb-[118px] xl:ml-0 xl:pb-0 xl:mr-0 xl:w-[646px] xl:shrink-0 xl:pt-109 xl:h-screen"
      ref={sectionRef}
      id={sectionIds.about.interested}
    >
      <div className="absolute -top-44 w-[320px] h-[320px] rounded-full bg-blue-primary-600 md:w-[385px] md:h-[385px] xl:h-113.5 xl:w-113.5"></div>
      <div className="relative mb-6 flex flex-col items-center gap-4 text-white md:gap-6 md:mb-8 xl:h-fit xl:gap-8 xl:mb-8">
        <ImgWithFallback
          src={"/images/about/envelope.webp"}
          fallback={"/images/about/envelope.png"}
          width={394}
          height={394}
          alt="envelope"
          imgClass='absolute h-full w-full object-fill'
          pictureClass='top absolute w-[212px] h-[212px] md:h-[290px] md:w-[290px] top-[-180px] md:-top-[262px] xl:-top-80'
        />
        <p className="text-center text-4xl leading-normal font-bold md:text-5xl md:leading-[64px] xl:text-5.5xl xl:leading-16 ">
          Interested?
          Let’s talk!
        </p>
        <span className="text-center text-lg xl:min-w-104.4 md:max-w-[505px]">
          Just fill this simple form in and we will contact you promptly to
          discuss your project.
        </span>
      </div>
      <div className="mb-10 flex flex-col items-center gap-2">
        <p className="text-xl font-bold xl:text-2xl">Hate forms?</p>
        <span className="text-xl text-center md:text-sm xl:text-start">
          Drop us a line at{" "}
          <a href="mailto:hello@iamfuture.club" className="cursor-pointer">
            hello@iamfuture.club
          </a>
        </span>
      </div>
    </div>
  );
};

export default Interested;
