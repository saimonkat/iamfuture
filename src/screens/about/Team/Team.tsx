import { Icons } from "@/components/icons";
import { TeamsTop, TeamsBottom } from "./const";
import React from "react";

import { sectionIds } from "@/constants/sectionIds";
import ImgWithFallback from "@/hoc/ImgWithFallback";

interface SectionProps {
  sectionRef?: React.RefObject<HTMLDivElement>;
}

const Team: React.FC<SectionProps> = ({ sectionRef }) => {
  return (
    <div
      className="relative mt-[52px] flex flex-col justify-between gap-0 pl-0 pr-0 xl:mt-0 xl:h-screen xl:gap-8 xl:pl-[17vh] xl:pr-40"
      ref={sectionRef}
      id={sectionIds.about.team}
    >
      <div className="flex flex-col items-center xl:hidden" >
        <p className="whitespace-nowrap bg-brand-gradient bg-clip-text text-5.5xl  font-extrabold leading-[110%] text-transparent xl:leading-25">
          Team
        </p>
        <span className="whitespace-nowrap text-4.4xl font-medium leading-normal">
          is the Key
        </span>
        <p className="mt-[13px] flex gap-1 text-blue-primary-300">
          <Icons.Swap />
          Swipe left to see more
        </p>
      </div>
      <div className="flex flex-col gap-8 overflow-x-auto xl:gap-0 xl:h-screen xl:justify-between">
        <div className="mb-0 mt-[29px] flex flex-col gap-24 md:mt-10 xl:mb-20 xl:mt-20 xl:flex-row xl:items-center">
          <div className="hidden xl:flex xl:flex-col">
            <p className="whitespace-nowrap bg-brand-gradient bg-clip-text text-7.5xl font-extrabold leading-25 text-transparent">
              Team
            </p>
            <span className="whitespace-nowrap text-5.5xl font-medium">
              is the Key
            </span>
          </div>
          <ul className="flex min-w-0 grow gap-[38px] md:gap-0 xl:gap-24 xl:min-w-fit">
            {TeamsTop.map((team, index) => (
              <li key={index} className="max-w-[92px] sm:max-w-[21%] sm:w-[21%] md:max-w-[230px] sm:shrink-0 md:w-[230px] md:flex md:flex-col md:items-center xl:w-full xl:max-w-fit">
                <div className="h-[92px] w-[92px] xl:h-44 xl:w-44 mx-auto">
                  {team.image}
                </div>
                <div className="text-lg">
                  <p className="pt-4 text-center font-semibold leading-[26px] text-white xl:whitespace-nowrap xl:pt-0 xl:text-start xl:font-bold">
                    {team.name}
                  </p>
                  <span className="mb-2 flex justify-center text-center text-sm text-blue-primary-300 xl:justify-start xl:whitespace-nowrap xl:text-start xl:text-lg">
                    {team.post}
                  </span>
                  <div className="flex justify-center xl:justify-start">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={team.linkedin}
                      className="mr-2 flex dark:focus:ring-blue-primary-300"
                    >
                      <Icons.SMedia.Linkedin />
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={team.facebook}
                    >
                      <Icons.SMedia.Facebook />
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-0 flex xl:mb-5">
          <ul className="flex min-w-0 grow gap-[38px] md:gap-0 xl:gap-24 xl:min-w-fit">
            {TeamsBottom.map((team, index) => (
              <li className="max-w-[92px] sm:max-w-[21%] sm:w-[21%] md:max-w-[230px] sm:shrink-0 md:flex md:w-[230px] md:flex-col md:items-center xl:max-w-fit xl:w-full" key={index}>
                <div className="h-[92px] w-[92px] xl:h-44 xl:w-44 mx-auto">
                  {team.image}
                </div>
                <div className="text-lg">
                  <p className="pt-4 text-center font-semibold leading-[24px] text-white xl:whitespace-nowrap xl:pt-0 xl:text-start xl:font-bold">
                    {team.name}
                  </p>
                  <span className="mb-2 flex justify-center text-center text-sm text-blue-primary-300 xl:justify-start xl:whitespace-nowrap xl:text-start xl:text-lg">
                    {team.post}
                  </span>
                  <div className="flex justify-center xl:justify-start">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={team.linkedin}
                      className="mr-2 flex dark:focus:ring-blue-primary-300"
                    >
                      <Icons.SMedia.Linkedin />
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={team.facebook}
                    >
                      <Icons.SMedia.Facebook />
                    </a>
                  </div>
                </div>
              </li>
            ))}
            <li className="hidden pt-14 text-end flex-col gap-6 xl:flex">
              <span className="whitespace-nowrap text-5.5xl font-medium">
                Board of
              </span>
              <p className="whitespace-nowrap bg-brand-gradient bg-clip-text text-7.5xl font-extrabold leading-25 text-transparent">
                Advisors
              </p>
            </li>
            <div className="flex gap-20">
            <li className="hidden flex-col gap-3 xl:flex">
              <div className="h-44 w-44">
                <ImgWithFallback
                  src={"/images/about/ari-last-advisor.webp"}
                  fallback={"/images/about/ari-last-advisor.png"}
                  width={180}
                  height={180}
                  alt="ari last advisor"
                />
              </div>
              <div className="text-lg">
                <p className=" whitespace-nowrap text-white">Ari Last</p>
                <span className="mb-2 flex whitespace-nowrap text-blue-primary-300">
                  Advisor
                </span>
                <div className="flex">
                  <a
                   rel="noreferrer"
                   target="_blank"
                   href="https://www.linkedin.com/in/ari-last-a685081"
                   className="mr-2 flex"
                  >
                    <Icons.SMedia.Linkedin />
                  </a>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://facebook.com/"
                  >
                    <Icons.SMedia.Facebook />
                  </a>
                </div>
              </div>
            </li>
            <li className="hidden flex-col gap-3 xl:flex">
              <div className="h-44 w-44">
                <ImgWithFallback
                  src={"/images/about/fabio-alves-moura-advisor.webp"}
                  fallback={"/images/about/fabio-alves-moura-advisor.png"}
                  width={180}
                  height={180}
                  alt="Fabio Alves Moura"
                />
              </div>
              <div className="text-lg">
                <p className=" whitespace-nowrap text-white">Fabio Alves Moura</p>
                <span className="mb-2 flex whitespace-nowrap text-blue-primary-300">
                  Advisor
                </span>
                <div className="flex">
                  <a
                   rel="noreferrer"
                   target="_blank"
                   href="https://www.linkedin.com/in/fabio-alves-moura"
                   className="mr-2 flex"
                  >
                    <Icons.SMedia.Linkedin />
                  </a>
                  <a
                   rel="noreferrer"
                   target="_blank"
                   href="https://facebook.com/"
                  >
                    <Icons.SMedia.Facebook />
                  </a>
                </div>
              </div>
            </li>
            </div>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center gap-6 pt-16 mb-[72px] md:mb-[72px] md:pt-[72px] xl:hidden">
        <div className="flex flex-col items-center text-end xl:hidden">
          <span className="whitespace-nowrap leading-[110%] text-4.4xl font-medium">
            Board of
          </span>
          <p className="whitespace-nowrap leading-[110%] bg-brand-gradient bg-clip-text text-5.5xl font-extrabold text-transparent">
            Advisors
          </p>
        </div>
        <div className="flex gap-20 xl:hidden">
          <div className="flex flex-col gap-3 items-center">
          <div className="h-[92px] w-[92px]">
            <ImgWithFallback
              src={"/images/about/ari-last-advisor.webp"}
              fallback={"/images/about/ari-last-advisor.png"}
              width={180}
              height={180}
              alt="ari last advisor"
            />
          </div>
          <div className="flex flex-col items-center text-lg">
            <p className="whitespace-nowrap text-center text-white text-lg">Ari Last</p>
            <span className="mb-3 text-sm flex whitespace-nowrap text-center text-blue-primary-300">
              Advisor
            </span>
            <div className="flex">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/ari-last-a685081"
                className="mr-2 flex"
              >
                <Icons.SMedia.Linkedin />
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://facebook.com/"
              >
                <Icons.SMedia.Facebook />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <div className="h-[92px] w-[92px]">
            <ImgWithFallback
              src={"/images/about/fabio-alves-moura-advisor.webp"}
              fallback={"/images/about/fabio-alves-moura-advisor.png"}
              width={180}
              height={180}
              alt="Fabio Alves Moura"
            />
          </div>
          <div className="flex flex-col items-center text-lg">
            <p className="whitespace-nowrap text-center text-white text-lg">Fabio Alves Moura</p>
            <span className="mb-3 text-sm flex whitespace-nowrap text-center text-blue-primary-300">
              Advisor
            </span>
            <div className="flex">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/fabio-alves-moura"
                className="mr-2 flex"
              >
                <Icons.SMedia.Linkedin />
              </a>
              <a rel="noreferrer" target="_blank" href="https://facebook.com/">
                <Icons.SMedia.Facebook />
              </a>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
