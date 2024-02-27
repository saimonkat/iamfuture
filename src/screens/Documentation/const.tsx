import { Icons } from "@/components/icons";

const tags = [
  "Notion Topic",
  "Notion Topic",
  "IamF Roadmap 2024",
  "OKRs",
  "Upcoming Features",
  "Forecast Slides",
  "Out Team",
  "KYC Providers",
  "Santiment Report",
  "Core Functions",
];

const lists = [
  {
    title: "Wallet",
    list: ["Core Features", "Tokenomics", "Tokenomics", "Core Features"],
  },
  {
    title: "Forecaster",
    list: [
      "Core Features",
      "Tokenomics",
      "Lorem Ipsum",
      "Tokenomics",
      "Core Features",
    ],
  },
  {
    title: "Token",
    list: ["Core Features", "Tokenomics", "Lorem Ipsum"],
  },
  {
    title: "IamF",
    list: ["Core Features", "Tokenomics", "Lorem Ipsum", "Core Features"],
  },
];

const supportServices = [
  {
    icon: <Icons.Gradient.CustomerSupport className="h-6 w-6 md:h-9 md:w-9" />,
    title: "Customer Support",
    text: "Lorem ipsum dolor sit amet, consectetur",
    link: "https://discord.com/channels/953199022435360819/971814525722574929/1083186830213652511",
  },
  {
    icon: <Icons.Gradient.AskQuestion className="h-6 w-6 md:h-10 md:w-10" />,
    title: "Frequently Asked Questions",
    text: "Ut sit amet nunc eu auguetempus fermentum non",
  },
  {
    icon: <Icons.Gradient.Document className="h-6 w-6 md:h-10 md:w-10" />,
    title: "Help Center",
    text: "Ut sodales quis tortor sit ametvehicula. In interdum nisl a tortor",
  },
];

export { tags, lists, supportServices };
