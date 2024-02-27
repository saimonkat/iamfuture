import { Concept } from "./Concept";
import { GovernanceStrategy } from "./GovernanceStrategy";
import { Forecast } from "./Forecast";
import { Token } from "./Token";
import { Wallet } from "./Wallet";

const setions = [
  {
    content: <Concept />,
    id: "Concept",
    phoneFrameProps: {
      imgSrc: "/images/features/phone-concept.png",
      alt: "concept phone screen",
    },
  },
  {
    content: <Wallet />,
    id: "Wallet",
    phoneFrameProps: {
      imgSrc: "/images/features/phone-wallet.png",
      alt: "wallet phone screen",
    },
  },
  {
    content: <Forecast />,
    id: "Forecast",
    phoneFrameProps: {
      imgSrc: "/images/features/phone-forecast.png",
      alt: "forecast phone screen",
    },
  },
  {
    content: <Token />,
    id: "Token",
    containerClassName: "gap-14",
    phoneFrameProps: {
      imgSrc: "/images/features/phone-token.png",
      alt: "token phone screen",
    },
  },
  {
    content: <GovernanceStrategy />,
    id: "Governance Strategy",
    containerClassName: "gap-14",
    phoneFrameProps: {
      imgSrc: "/images/features/phone-token.png",
      alt: "Governance Strategy phone screen",
    },
  },
];

const phoneFramePropsConcept = {
  imgSrc: "/images/features/phone-concept.png",
  imgWebp: "/images/features/phone-concept.webp",
  alt: "concept phone screen",
};

const phoneFramePropsWallet = {
  imgSrc: "/images/features/phone-wallet.png",
  imgWebp: "/images/features/phone-wallet.webp",
  alt: "wallet phone screen",
};

const phoneFramePropsForecast = {
  imgSrc: "/images/features/phone-forecast.png",
  imgWebp: "/images/features/phone-forecast.webp",
  alt: "forecast phone screen",
};

const phoneFramePropsToken = {
  imgSrc: "/images/features/phone-token.png",
  imgWebp: "/images/features/phone-token.webp",
  alt: "token phone screen",
};

export {
  setions,
  phoneFramePropsConcept,
  phoneFramePropsWallet,
  phoneFramePropsForecast,
  phoneFramePropsToken,
};
