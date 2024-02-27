import { contactLinks } from "@/constants/contactLinks";
import { Icons } from "../icons";
import { sectionIds } from "@/constants/sectionIds";

const SMediaContacts = [
  {
    icon: <Icons.SMedia.Youtube className="h-[2.2vh] w-[2.2vh]" />,
    link: "/",
    name: "youtube",
    value: "@iamfuture",
  },
  {
    icon: <Icons.SMedia.Discord className="h-[1.7vh] w-[2.0vh]" />,
    link: contactLinks.discord.main,
    name: "discord",
    value: "@iamf",
  },
  {
    icon: <Icons.SMedia.Twitter className="h-[2.1vh] w-[2.1vh]" />,
    link: contactLinks.twitter,
    name: "twitter",
    value: "@iamfuture",
  },
  {
    icon: <Icons.SMedia.Notion className="h-[2vh] w-[2vh]" />,
    link: contactLinks.notion,
    name: "notion",
    value: "",
  },
];

const sidebarNavs = [
  {
    title: "Solutions",
    id: "feature",
    idTween: "fTween",
    isTween: true,
    groups: [
      { title: "Concept", hash: sectionIds.features.concept, id: "concept" },
      { title: "Wallet", hash: sectionIds.features.wallet, id: "wallet" },
      { title: "Forecast", hash: sectionIds.features.forecast, id: "forecast" },
      { title: "Token", hash: sectionIds.features.token, id: "token" },
      {
        title: "Governance Strategy",
        id: "governance-strategy",
        hash: sectionIds.features.governanceStrategy,
      },
    ],
  },
  {
    title: "Documentation",
    id: "documentation",
    idTween: "documentationTween",
    isTween: false,
    groups: [
      // { title: "Roadmap", hash: "", id: "roadmap" },
      {
        title: "Knowledge Base",
        id: "knowledge-base",
        hash: "",
        link: contactLinks.notion,
        target: "_blank",
      },
      { title: "FAQ", hash: "faq", id: "" },
      // { title: "Blog", hash: "", id: "blog" },
    ],
  },
  {
    title: "IamFuture",
    id: "aboutUs",
    idTween: "aboutUsTween",
    isTween: true,
    groups: [
      { title: "", hash: "", id: "intro" },
      { title: "About us", hash: sectionIds.about.team, id: "team" },
      { title: "Contacts", hash: sectionIds.about.interested, id: "interested" },
      { title: "", hash: "", id: "form" },
      { title: "Legal Information", hash: sectionIds.about.join, id: "join" },
    ],
  },
  // {
  //   title: "Community",
  // },
];

export { SMediaContacts, sidebarNavs };
