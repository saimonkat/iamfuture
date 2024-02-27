import { Icons } from "@/components/icons";
import ImgWithFallback from "@/hoc/ImgWithFallback";
import React from "react";

const CoinsList = [
  {
    icon: <Icons.Cryptocurrencies.Ethereum />,
    iconContainerClassName: "bg-[#49a4ff]",
    name: "Ethereum",
    chain: "ETH",
    graph: (
      <ImgWithFallback
        src={'/images/predictions/coins/example-3.webp'}
        fallback={'/images/predictions/coins/example-3.png'}
        alt={"graphs view"}
        imgClass='absolute h-full w-full object-fill'
      />
    ),
    description: "Prediction Example - Graphs View",
  },
  {
    icon: <Icons.Cryptocurrencies.Bitcoin />,
    iconContainerClassName: "bg-[#ffb65e]",
    name: "Bitcoin",
    chain: "BTC",
    graph: (
      <ImgWithFallback
        src={"/images/predictions/coins/example-1.webp"}
        fallback={"/images/predictions/coins/example-1.png"}
        alt={"cards view"}
        imgClass='absolute h-full w-full object-fill'
      />
    ),
    description: "Prediction Example - Cards View",
  },
  {
    icon: <Icons.Cryptocurrencies.Polygon />,
    iconContainerClassName: "bg-[#9427d7]",
    name: "Polygon",
    chain: "MATIC",
    graph: (
      <ImgWithFallback
        src={"/images/predictions/coins/example-2.webp"}
        fallback={"/images/predictions/coins/example-2.png"}
        alt={"overlook"}
        imgClass='absolute h-full w-full object-fill'
      />
    ),
    description: "Prediction Example - Overlook",
  },
];

export { CoinsList };
