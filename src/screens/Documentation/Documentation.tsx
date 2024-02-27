import { Container } from "@/components/Container";
import { supportServices } from "./const";
import {
  SupportServiceCard,
  SupportServiceCardMobile,
} from "@/components/SupportServiceCard";
import Link from "next/link";
import { contactLinks } from "@/constants/contactLinks";
import ImgWithFallback from "@/hoc/ImgWithFallback";
import React from "react";

const Documentation = () => {
  return (
    <div className="overflow-hidden pb-[67px] md:pb-[144px] xl:overflow-auto xl:pb-0">
      <Container className="relative pb-[105px] pt-[160px] md:pb-[160px] xl:pt-44">
        <div className="mx-auto max-w-xl space-y-4 text-center">
          <h2
            className="mx-auto w-fit text-4xl font-bold leading-normal text-white md:text-5xl xl:text-5.5xl xl:leading-[6.4vh]">
            Detailed Documentation
          </h2>
          <div className="text-2.2xl font-light leading-9 xl:text-3.4xl">
            IamF Knowledge Base
          </div>
        </div>
        <div className="mx-auto mt-8 w-fit xl:mt-10">
          <Link
            target="_blank"
            className="relative z-10 inline-flex h-auto items-center justify-center whitespace-nowrap rounded-md bg-brand-gradient px-6 py-4 text-base font-bold text-blue-primary-900 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            href={contactLinks.notion}
          >
            Go to IamF Notion
          </Link>
        </div>
        <div
          className="absolute left-[50%] top-[50%] -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 md:h-[75vh] md:w-[100vh]">
          <ImgWithFallback
            src={'/images/documentation-background.webp'}
            fallback={'/images/documentation-background.png'}
            alt="magic ball"
            sizes="100vh"
            imgClass='absolute h-full w-full object-fill'
          />
        </div>
      </Container>
      {/*  <div className="relative mt-16.5 space-y-3 overflow-visible">
        <div className="absolute top-1/2 h-[75vh] w-full -translate-y-1/2">
          <Image src={bgImg} alt="background gradient" fill />
        </div>
        <div className="relative flex flex-nowrap gap-3 overflow-x-hidden">
          {tags.map((tag, i) => (
            <Tag className="flex-shrink-0" key={i}>
              {tag}
            </Tag>
          ))}
        </div>
        <div className="relative flex flex-nowrap gap-3 overflow-x-hidden">
          {tags.reverse().map((tag, i) => (
            <Tag className="flex-shrink-0" key={i}>
              {tag}
            </Tag>
          ))}
        </div>
        <div className="relative flex flex-nowrap gap-3 overflow-x-hidden">
          {tags.slice(2).map((tag, i) => (
            <Tag className="flex-shrink-0" key={i}>
              {tag}
            </Tag>
          ))}
        </div>
      </div> */}
      <Container className="xl:pb-[15vh]" id={"faq"}>
        {/*  <div className="mt-24 grid grid-cols-4">
          {lists.map((list, i) => (
            <ListWIthIcon key={i} {...list} />
          ))}
        </div>
        <Button className="mt-12 w-full">Load More</Button>
        <div className="mt-20">
          <div className="mx-auto w-fit space-y-2 text-center">
            <h3 className="text-4.4xl font-bold">Any other questions?</h3>
            <div className="text-3.4xl/9 font-light">We are ready to help</div>
          </div>
        </div> */}
        <h2
          className="mx-auto mb-6 w-fit bg-brand-gradient bg-clip-text text-2.4xl font-bold leading-[110%] text-transparent md:text-4xl xl:mb-4 xl:text-4.4xl xl:leading-[6.4vh]"
          >
          Questions?
        </h2>
        <div className="mt-8 flex flex-col items-start md:items-stretch gap-6 md:grid md:grid-cols-3 md:gap-6">
          {supportServices.map((service, i) => (
            <div key={i} className="md:flex-grow md:flex">
              {/* INFO: These two components need to be refactored */}
              <SupportServiceCardMobile
                className="md:h-0 md:w-0 md:overflow-hidden"
                {...service}
              />
              <SupportServiceCard className="hidden md:flex" {...service} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Documentation;
