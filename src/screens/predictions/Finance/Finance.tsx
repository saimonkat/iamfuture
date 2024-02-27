import { Icons } from "@/components/icons";
import ImgWithFallback from "@/hoc/ImgWithFallback";
import React from "react";

interface SectionProps {
  sectionRef?: React.RefObject<HTMLDivElement>;
  className?: string;
}
const Finance: React.FC<SectionProps> = ({ sectionRef }) => {
  return (
    <div
      className="relative mx-auto flex max-w-full shrink-0 flex-col items-center overflow-hidden bg-blue-primary-800 px-9 pb-25 pt-80 xl:max-w-[55.5vh] xl:px-18 xl:pb-0"
      ref={sectionRef}
    >
      <div className="absolute -top-52 h-113.5 w-113.5 rounded-full bg-blue-primary-600"></div>
      <div className="z-10 -mt-[45%] md:-mt-[20%] xl:-mt-[0] text-white">
        <ImgWithFallback
          src={"/images/digital.webp"}
          fallback={"/images/digital.png"}
          width={130}
          height={130}
          alt={"envelope"}
          imgClass='mx-auto'
        />
        <h2 className="mt-10 text-center text-4.8xl font-bold leading-normal md:text-4xl md:leading-normal xl:text-4.4xl">
          The AI-powered Future of Web3 investment is here
        </h2>
        <div className="mx-auto mt-7.5 max-w-[25.125vh] text-center xl:mt-4 xl:min-w-104.4 xl:whitespace-nowrap">
          Discover, trade, and manage crypto, just like that!
        </div>
        <button className="mx-auto mt-10 flex items-center justify-center rounded-[0.75vh] bg-blue-primary-600 px-[2.375vh] py-[1.25vh] xl:h-0 xl:w-0 xl:overflow-hidden xl:rounded-lg xl:px-0 xl:py-0">
          <Icons.AppStoreWithText className="h-[4.125vh] w-[17.7vh] dark:grayscale" />
        </button>
      </div>
      {/* <div className="mb-12 flex space-x-3">
        <button className="flex items-center justify-center rounded-lg bg-blue-primary-600 px-4.5 py-2.5">
          <Icons.AppStoreWithText />
        </button>
        <button className="flex items-center justify-center rounded-lg bg-blue-primary-600 px-4.5 py-2.5">
          <Icons.GooglePlayStoreWithText />
        </button>
      </div>
      <p className="mb-6 text-base font-normal text-blue-primary-300">
        Scan the QR code or use direct links to the stores
      </p> */}
      {/*           <div className="flex w-48 items-center justify-center h-48 bg-blue-primary-300 rounded-2xl">
    <Image
      src="/images/qr.png"
      width={140}
      height={140}
      className=""
      alt="envelope"
    />
  </div> */}
    </div>
  );
};

export default Finance;
