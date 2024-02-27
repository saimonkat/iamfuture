import { Icons } from "@/components/icons";

const benefits = [
  {
    icon: (
      <Icons.Gradient.SecurityLock className="h-11.25 w-11.25 md:h-10 md:w-10 xl:h-9 xl:w-9" />
    ),
    text: "Self Custody",
  },
  {
    icon: (
      <Icons.Gradient.StackOfCoins className="h-11.25 w-11.25 md:h-10 md:w-10 xl:h-9 xl:w-9" />
    ),
    text: "Decentralised exchange (DEX)",
  },
  {
    icon: (
      <Icons.Gradient.InitiateMoneyTransfer className="h-11.25 w-11.25 md:h-10 md:w-10 xl:h-9 xl:w-9" />
    ),
    text: "Traditional Finance Gateway",
  },
  {
    icon: (
      <Icons.Gradient.Increase className="h-11.25 w-11.25 md:h-10 md:w-10 xl:h-9 xl:w-9" />
    ),
    text: "Investing",
  },
];

const benefitsPart1 = benefits.slice(0, 2);
const selfCustodyList = [
  "No custodial risk",
  "Secure",
  "Intuitive design",
  "Simple onboarding",
];

const benefitsPart2 = benefits.slice(2);
const investingList = [
  "Earn real yield with no custodial risk through Thorchain savers",
  "Access Liquid staking opportunities through likes of Lido, P2P etc.",
  "Provide Liquidity with IamF token",
];

export { benefitsPart1, benefitsPart2, selfCustodyList, investingList };
