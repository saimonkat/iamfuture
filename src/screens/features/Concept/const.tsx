import { Icons } from "@/components/icons";

const benefits = [
  {
    icon: <Icons.Protect />,
    text: (
      <>
        Offer clients with a <b>polished and intuitive gateway</b> to web3 and
        finance
      </>
    ),
  },
  {
    icon: <Icons.Lock />,
    text: (
      <>
        Secure our <b>Client&apos;s Future</b>
      </>
    ),
  },
  {
    icon: <Icons.Cash />,
    text: (
      <>
        Fostering increased <b>financial literacy</b> and wealth creation offer
      </>
    ),
  },
];

const benefits2 = [
  {
    icon: (
      <Icons.Gradient.MagicCrystalBall className="h-11.25 w-11.25 md:h-11 md:w-11 xl:h-9 xl:w-9" />
    ),
    text: "Forecast Engine",
  },
  {
    icon: (
      <Icons.Gradient.Exchange className="h-11.25 w-13.75 xl:h-11 xl:w-13.5" />
    ),
    text: "Decentralised Exchange",
  },
  {
    icon: (
      <Icons.Gradient.Wallet className="h-11.25 w-13.75 xl:h-11 xl:w-13.5" />
    ),
    text: "IamFuture Web3  Crypto Wallet",
  },
  {
    icon: (
      <Icons.Gradient.CardPayment className="h-11.25 w-11.25 md:h-11 md:w-11 xl:h-9 xl:w-9" />
    ),
    text: "Virtual Bank Account & Debit Card Solution",
  },
];

export { benefits, benefits2 };
