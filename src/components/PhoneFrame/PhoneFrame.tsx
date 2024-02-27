import { cn } from "@/lib/utils";
import React, { HTMLAttributes } from "react";
import ImgWithFallback from "@/hoc/ImgWithFallback";

interface PhoneFrameProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  imgWebp: string;
  alt: string;
}

const PhoneFrame = ({ imgSrc, imgWebp, alt, className, ...props }: PhoneFrameProps) => {
  return (
    <div
      className={cn(
        "relative h-[61.2vh] w-[29.3vh] flex-shrink-0 rounded-3xl border-[0.375rem] border-blue-primary-300 bg-blue-primary-600",
        className,
      )}
      {...props}
    >
      {/* INFO: power button */}
      <div className="absolute -right-[0.275rem] top-44 h-[7.002vh] w-[0.5328vh] translate-x-full rounded-[0.5625rem] bg-blue-primary-300" />
      {/* INFO: valume buttons */}
      <div className="absolute -left-[0.275rem] top-[15.22vh] h-[3.8054vh] w-[0.5328vh] -translate-x-full rounded-[0.5625rem] bg-blue-primary-300" />
      <div className="absolute -left-[0.275rem] top-[19.77vh] h-[3.8054vh] w-[0.5328vh] -translate-x-full rounded-[0.5625rem] bg-blue-primary-300" />

      <ImgWithFallback
        src={imgWebp}
        fallback={imgSrc}
        alt={alt || "phone screen"}
        sizes="29.3vh"
        imgClass='absolute h-full w-full object-fill overflow-hidden rounded-[1.2rem]'
      />
    </div>
  );
};

export default PhoneFrame;
