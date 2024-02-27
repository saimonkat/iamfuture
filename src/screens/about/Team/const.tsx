import { Icons } from "@/components/icons";
import ImgWithFallback from "@/hoc/ImgWithFallback";
import React from "react";

const CTAHeading = [
  {
    icon: <Icons.Gradient.FinancialAnalytics />,
    title: (
      <>
        <span className="font-semibold text-white">Increased access</span>
        to financial services
      </>
    ),
  },
  {
    icon: <Icons.Gradient.Link />,
    title: (
      <>
        <span className="font-semibold text-white">Seamless connection</span>{" "}
        between Defi and Tradfi{" "}
      </>
    ),
  },
  {
    icon: <Icons.Gradient.Web />,
    title: (
      <>
        <span className="font-semibold text-white">Strong web3</span>{" "}
        educational component
      </>
    ),
  },
  {
    icon: <Icons.Gradient.RetroAlarmClock />,
    title: (
      <>
        <span className="font-semibold text-white">Save time</span> with AI
        project analysis & market predictions
      </>
    ),
  },
  {
    icon: <Icons.Gradient.WebAnalytics />,
    title: (
      <>
        <span className="font-semibold text-white">Stay ahead</span> of the
        market when Buying, selling and taking profit
      </>
    ),
  },
];

const TeamsTop = [
  {
    image: (
      <ImgWithFallback
        src={"/images/about/ceo.webp"}
        fallback={"/images/about/ceo.png"}
        width={180}
        height={180}
        alt="ceo"
      />
    ),
    name: "Maya Berezhna",
    post: "CEO",
    linkedin: "https://ru.linkedin.com/",
    facebook: "https://ru-ru.facebook.com/",
  },
  {
    image: (
      <ImgWithFallback
        src={"/images/about/product-director.webp"}
        fallback={"/images/about/product-director.png"}
        width={180}
        height={180}
        alt="product-director"
      />
    ),
    name: "Stuart Currie",
    post: "Product Director",
    linkedin: "https://www.linkedin.com/in/stuart-currie-79a8067b",
    facebook: "https://ru-ru.facebook.com/",
  },
  {
    image: (
      <ImgWithFallback
        src={"/images/about/project-coordinator.webp"}
        fallback={"/images/about/project-coordinator.png"}
        width={180}
        height={180}
        alt="project-coordinator"
      />
    ),
    name: "Artem Beliakov",
    post: "Project Coordinator",
    linkedin: "https://www.linkedin.com/in/artem-beliakov",
    facebook: "https://ru-ru.facebook.com/",
  },
  {
    image: (
      <ImgWithFallback
        src={"/images/about/team-lead.webp"}
        fallback={"/images/about/team-lead.png"}
        width={180}
        height={180}
        alt="team-lead"
      />
    ),
    name: "Anton Drobyshev",
    post: "Team Lead",
    linkedin: "https://www.linkedin.com/in/anton-drobyshev",
    facebook: "https://ru-ru.facebook.com/",
  },
  {
    image: (
      <ImgWithFallback
        src={"/images/about/project-manager.webp"}
        fallback={"/images/about/project-manager.png"}
        width={180}
        height={180}
        alt="project-manager"
      />
    ),
    name: "Vladimir Belov",
    post: "Project Manager",
    linkedin: "https://ru.linkedin.com/",
    facebook: "https://ru-ru.facebook.com/",
  },
  {
    image: (
      <ImgWithFallback
        src={"/images/about/dev-1.webp"}
        fallback={"/images/about/dev-1.png"}
        width={180}
        height={180}
        alt="dev"
      />
    ),
    name: "Alex Shashechkin",
    post: "React-native Developer",
    linkedin: "https://www.linkedin.com/in/frontendcoder",
    facebook: "https://ru-ru.facebook.com/",
  },
  {
    image: (
      <ImgWithFallback
        src={"/images/about/dev-2.webp"}
        fallback={"/images/about/dev-2.png"}
        width={180}
        height={180}
        alt="dev"
      />
    ),
    name: "Alex Mironov",
    post: "React-native Developer",
    linkedin: "https://ru.linkedin.com/",
    facebook: "https://ru-ru.facebook.com/",
  },
];

const TeamsBottom = [
  {
    image: (
      <ImgWithFallback
        src={"/images/about/dev-3.webp"}
        fallback={"/images/about/dev-3.png"}
        width={180}
        height={180}
        alt="dev"
      />
    ),
    name: "Kanyshai Bakaeva",
    post: "React-native Developer",
    linkedin: "https://www.linkedin.com/in/kbakaeva",
    facebook: "https://ru-ru.facebook.com/",
  },
  {
    image: (
      <ImgWithFallback
        src={"/images/about/dev-4.webp"}
        fallback={"/images/about/dev-4.png"}
        width={180}
        height={180}
        alt="dev"
      />
    ),
    name: "Ulumdzhi Ulumdzhiev",
    post: "ML Developer",
    linkedin: "https://ru.linkedin.com/",
    facebook: "https://ru-ru.facebook.com/",
  },
  {
    image: (
      <ImgWithFallback
        src={"/images/about/dev-5.webp"}
        fallback={"/images/about/dev-5.png"}
        width={180}
        height={180}
        alt="dev"
      />
    ),
    name: "Denis Sinitskiy",
    post: "ML Developer",
    linkedin: "https://ru.linkedin.com/",
    facebook: "https://ru-ru.facebook.com/",
  },
  {
    image: (
      <ImgWithFallback
        src={"/images/about/dev-6.webp"}
        fallback={"/images/about/dev-6.png"}
        width={180}
        height={180}
        alt="dev"
      />
    ),
    name: "Mikhail Polyakov",
    post: "QA engineer",
    linkedin: "https://www.linkedin.com/in/carpolus",
    facebook: "https://ru-ru.facebook.com/",
  },
  {
    image: (
      <ImgWithFallback
        src={"/images/about/designer.webp"}
        fallback={"/images/about/designer.png"}
        width={180}
        height={180}
        alt="designer"
      />
    ),
    name: "Mikhail Shikhalev",
    post: "Product Designer",
    linkedin: "https://ru.linkedin.com/",
    facebook: "https://ru-ru.facebook.com/",
  },
];

export { CTAHeading, TeamsTop, TeamsBottom };
