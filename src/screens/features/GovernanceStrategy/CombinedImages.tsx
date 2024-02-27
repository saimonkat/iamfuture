import { PhoneFrame } from "@/components/PhoneFrame";
import ImgWithFallback from "@/hoc/ImgWithFallback";
import React from "react";

const CombinedImages = () => {
  return (
    <div className="relative">
      <PhoneFrame
        imgSrc="/images/features/phone-governance-strategy-bg.png"
        imgWebp="/images/features/phone-governance-strategy-bg.webp"
        alt="chess background"
        className="mx-auto"
      />
      <div className="absolute left-1/2 top-1/2 h-[35vh] w-[38.1vh] -translate-x-[49%] -translate-y-[45%]">
        <ImgWithFallback
          src={"/images/features/phone-governance-strategy.webp"}
          fallback={"/images/features/phone-governance-strategy.png"}
          alt={"chess"}
          imgClass='absolute h-full w-full object-fill'
        />
      </div>
    </div>
  );
};

export default CombinedImages;
