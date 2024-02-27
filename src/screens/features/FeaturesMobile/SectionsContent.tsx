import { RefObject } from "react";
import { Container } from "@/components/Container";
import { PhoneFrame } from "@/components/PhoneFrame";
import { cn } from "@/lib/utils";
import { sectionIds } from "@/constants/sectionIds";

import { Concept } from "../Concept";
import { MobileWallet } from "../Wallet";
import { Forecast } from "../Forecast";
import { Token } from "../Token";
import {
  GovernanceStrategy,
  GovernanceStrategyPhone,
} from "../GovernanceStrategy";
import {
  phoneFramePropsConcept,
  phoneFramePropsForecast,
  phoneFramePropsToken,
  phoneFramePropsWallet,
} from "../const";

interface SectionsContentProps {
  className?: string;
  conceptContainerRef: RefObject<HTMLDivElement>;
  walletContainerRef: RefObject<HTMLDivElement>;
  forecastContainerRef: RefObject<HTMLDivElement>;
  tokenContainerRef: RefObject<HTMLDivElement>;
  strategyContainerRef: RefObject<HTMLDivElement>;
}

const SectionsContent = ({
  className,
  conceptContainerRef,
  walletContainerRef,
  forecastContainerRef,
  tokenContainerRef,
  strategyContainerRef,
}: SectionsContentProps) => {
  return (
    <Container className={cn("mt-13 space-y-[10.25vh] xl:mt-0 pb-10", className)}>
      <div
        className="space-y-15 md:flex md:flex-row-reverse md:flex-nowrap md:items-start md:justify-between md:gap-8 md:space-y-0"
        ref={conceptContainerRef}
        id={sectionIds.features.concept}
      >
        <PhoneFrame className="mx-auto" {...phoneFramePropsConcept} />
        <Concept />
      </div>
      <div
        className="space-y-15 md:flex md:flex-row-reverse md:flex-nowrap md:items-start md:justify-between md:gap-8 md:space-y-0"
        ref={walletContainerRef}
        id={sectionIds.features.wallet}
      >
        <PhoneFrame className="mx-auto" {...phoneFramePropsWallet} />
        <MobileWallet />
      </div>
      <div
        className="space-y-15 md:flex md:flex-row-reverse md:flex-nowrap md:items-start md:justify-between md:gap-8 md:space-y-0"
        ref={forecastContainerRef}
        id={sectionIds.features.forecast}
      >
        <PhoneFrame className="mx-auto" {...phoneFramePropsForecast} />
        <Forecast />
      </div>
      <div
        className="space-y-15 md:flex md:flex-row-reverse md:flex-nowrap md:items-start md:justify-between md:gap-14 md:space-y-0"
        ref={tokenContainerRef}
        id={sectionIds.features.token}
      >
        <PhoneFrame className="mx-auto" {...phoneFramePropsToken} />
        <Token />
      </div>
      <div
        className="space-y-15 md:flex md:flex-row-reverse md:flex-nowrap md:items-start md:justify-between md:gap-8 md:space-y-0"
        ref={strategyContainerRef}
        id={sectionIds.features.governanceStrategy}
      >
        <GovernanceStrategyPhone />
        <GovernanceStrategy />
      </div>
    </Container>
  );
};

export default SectionsContent;
