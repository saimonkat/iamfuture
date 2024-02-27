import { Icons } from "@/components/icons";
import Image from "next/image";

const FutureName = [
  {
    text: "Future",
  },
  {
    text: "Freedom",
  },
  {
    text: "Forecasting",
  },
  {
    text: "Foresight",
  },
  {
    text: "Fearless",
  },
  {
    text: "Flexibility",
  },
];

const CTAHeading = [
  {
    icon: <Icons.BoxTest />,
    title: "Lorem Ipsum",
    text: "Lipsum",
  },
  {
    icon: <Icons.BoxTest />,
    title: "Lorem Ipsum",
    text: "Lipsum",
  },
  {
    icon: <Icons.BoxTest />,
    title: "Lorem Ipsum",
    text: "Lipsum",
  },
  {
    icon: <Icons.BoxTest />,
    title: "Lorem Ipsum",
    text: "Lipsum",
  },
  {
    icon: <Icons.BoxTest />,
    title: "Lorem Ipsum",
    text: "Lipsum",
  },
  {
    icon: <Icons.BoxTest />,
    title: "Lorem Ipsum",
    text: "Lipsum",
  },
];

const TeamsTop = [
  {
    image: (
      <Image src="/images/about/ceo.png" width={180} height={180} alt="ceo" />
    ),
    name: "Maya Berezhna",
    post: "CEO",
    linkedin: "https://ru.linkedin.com/",
    facebook: "https://ru-ru.facebook.com/",
  },
  {
    image: (
      <Image
        src="/images/about/product-director.png"
        width={180}
        height={180}
        alt="product-director"
      />
    ),
    name: "Stuart Currie",
    post: "Product Director",
    linkedin: "https://ru.linkedin.com/",
    facebook: "https://ru-ru.facebook.com/",
  },
  {
    image: (
      <Image
        src="/images/about/project-coordinator.png"
        width={180}
        height={180}
        alt="project-coordinator"
      />
    ),
    name: "Artem Beliakov",
    post: "Project Coordinator",
    linkedin: "https://ru.linkedin.com/",
    facebook: "https://ru-ru.facebook.com/",
  },
  {
    image: (
      <Image
        src="/images/about/team-lead.png"
        width={180}
        height={180}
        alt="team-lead"
      />
    ),
    name: "Anton Drobyshev",
    post: "Team Lead",
    linkedin: "https://ru.linkedin.com/",
    facebook: "https://ru-ru.facebook.com/",
  },
  {
    image: (
      <Image
        src="/images/about/project-manager.png"
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
      <Image src="/images/about/dev-1.png" width={180} height={180} alt="dev" />
    ),
    name: "Alex Shasheckin",
    post: "React-native Developer",
    linkedin: "https://ru.linkedin.com/",
    facebook: "https://ru-ru.facebook.com/",
  },
];

const TeamsBottom = [
  {
    image: (
      <Image src="/images/about/dev-2.png" width={180} height={180} alt="dev" />
    ),
    name: "Alex Mironov",
    post: "React-native Developer",
    linkedin: "https://ru.linkedin.com/",
    facebook: "https://ru-ru.facebook.com/",
  },
  {
    image: (
      <Image src="/images/about/dev-3.png" width={180} height={180} alt="dev" />
    ),
    name: "Kanyshai Bakaeva",
    post: "React-native Developer",
    linkedin: "https://ru.linkedin.com/",
    facebook: "https://ru-ru.facebook.com/",
  },
  {
    image: (
      <Image src="/images/about/dev-4.png" width={180} height={180} alt="dev" />
    ),
    name: "Ulumdzhi Ulumdzhiev",
    post: "ML Developer",
    linkedin: "https://ru.linkedin.com/",
    facebook: "https://ru-ru.facebook.com/",
  },
  {
    image: (
      <Image src="/images/about/dev-5.png" width={180} height={180} alt="dev" />
    ),
    name: "Denis Sinitskiy",
    post: "ML Developer",
    linkedin: "https://ru.linkedin.com/",
    facebook: "https://ru-ru.facebook.com/",
  },
  {
    image: (
      <Image src="/images/about/dev-6.png" width={180} height={180} alt="dev" />
    ),
    name: "Michael",
    post: "Blockchain Developer",
    linkedin: "https://ru.linkedin.com/",
    facebook: "https://ru-ru.facebook.com/",
  },
  {
    image: (
      <Image src="/images/about/designer.png" width={180} height={180} alt="designer" />
    ),
    name: "Mikhail Shikhalev",
    post: "Product Designer",
    linkedin: "https://ru.linkedin.com/",
    facebook: "https://ru-ru.facebook.com/",
  },
];

export { FutureName, CTAHeading, TeamsTop, TeamsBottom };
