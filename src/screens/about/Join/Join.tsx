import React from "react";
import GoToTopBtn from "./GoToTopBtn";
import { contactLinks } from "@/constants/contactLinks";
import { sectionIds } from "@/constants/sectionIds";
import ImgWithFallback from "@/hoc/ImgWithFallback";

interface SectionProps {
  sectionRef?: React.RefObject<HTMLDivElement>;
}

const Join: React.FC<SectionProps> = ({ sectionRef }) => {
  return (
    <div
      className="relative flex h-fit shrink-0 flex-col pt-30 xl:pt-16 xl:h-screen"
      ref={sectionRef}
      id={sectionIds.about.join}
    >
      <div className="flex w-full flex-col items-center">
        <div className="relative">
          <div className="absolute left-1/2 top-1/2 h-[400px] w-[735px] -translate-x-2/4 -translate-y-1/2 md:h-[575px] md:w-[935px] md:leading-[133.333%] xl:h-[675px] xl:w-[1135px]">
            <ImgWithFallback
              src={"/images/magic-ball-bg-2.webp"}
              fallback={"/images/magic-ball-bg-2.png"}
              sizes="100vw"
              alt="magic ball"
              imgClass='absolute h-full w-full object-fill'
            />
          </div>
          <div className="relative h-[260px] w-[260px] md:h-[336px] md:w-[336px] xl:h-[60.5vh] xl:w-[60.5vh]">
            <ImgWithFallback
              src={"/images/magic-ball-2.webp"}
              fallback={"/images/magic-ball-2.png"}
              alt="magic ball"
              imgClass='absolute h-full w-full object-fill'
            />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="bg-gradient mt-7 text-center text-4xl font-bold leading-[110%] md:text-5xl xl:whitespace-nowrap xl:text-5.5xl">
            The Future of Crypto Investment is Here
          </h1>
          <a
            href={contactLinks.discord.invitation}
            rel="noreferrer"
            target="_blank"
            className="relative mt-6 text-2.2xl font-light xl:text-3.4xl"
          >
            Join Today
          </a>
          {/* <div className="mt-11 flex items-center">
            <div className="flex space-x-3">
              <button className="flex items-center justify-center rounded-lg bg-blue-primary-600 px-4.5 py-2.5">
                <Icons.AppStoreWithText className="h-[3.4vh] w-[14.2vh]" />
              </button>
              <button className="flex items-center justify-center rounded-lg bg-blue-primary-600 px-4.5 py-2.5">
                <Icons.GooglePlayStoreWithText className="h-[3.6vh] w-[14.6vh]" />
              </button>
            </div>
          </div> */}
          <GoToTopBtn className="relative mt-3 xl:mt-4">GO TO TOP</GoToTopBtn>
        </div>
      </div>
      <div className="mb-8 mt-auto px-2.5 py-6.5 text-center">
        <ul className="mb-4 inline-flex gap-6">
          <li>
            <a
              href="/docs/terms-of-use.pdf"
              className="w-fit text-base font-normal transition-opacity hover:opacity-[0.9]"
              target="_blank"
            >
              Terms of service
            </a>
          </li>
          <li>
            <a
              href="/docs/privacy-policy.pdf"
              className="w-fit text-base font-normal transition-opacity hover:opacity-[0.9]"
              target="_blank"
            >
              Privacy policy
            </a>
          </li>
        </ul>
        <p className="mx-auto max-w-[175px] border-t border-blue-primary-300 px-2 pt-5 text-xs text-blue-primary-300 md:max-w-fit xl:max-w-none xl:border-0 xl:px-0 xl:pt-0 xl:text-sm">
          <span className="font-normal xl:font-semibold">
            © GalactaVista s.r.o
          </span>
          , 19602081, Czech Republic, Prague
        </p>
      </div>
    </div>
  );
};

export default Join;
