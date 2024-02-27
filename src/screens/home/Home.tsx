import React from "react";
import { Container } from "@/components/Container";
import { PlayVideo } from "@/components/PlayVideo";
import { Icons } from "@/components/icons";
import ImgWithFallback from '@/hoc/ImgWithFallback';

interface SectionProps {
  sectionRef?: React.RefObject<HTMLDivElement>;
}

const Home: React.FC<SectionProps> = ({ sectionRef }) => {
  return (
    <div className="relative overflow-x-hidden" ref={sectionRef}>
      <Container className="relative flex h-screen flex-col-reverse items-center justify-center md:mt-10 xl:mt-0 xl:flex-row xl:justify-between">
        <div>
          <h1 className="bg-secondary-gradient bg-clip-text text-center text-[7vh] font-bold leading-[110%] text-transparent xl:w-fit xl:text-left xl:text-[9.2vh]">
            The Future <br className="md:hidden xl:block" />
            of Finance
          </h1>
          <p className="mt-2 text-center text-2.5xl/8 font-light md:mt-8 md:text-3.4xl xl:text-left">
            Smarter Choices, Brighter <br className="md:hidden xl:block" />{" "}
            Future
          </p>
          {/* INFO: temporary commented */}
          {/* <div className="mt-14 items-center xl:flex">
            <Button
              variant="outline"
              className="hidden h-full space-x-3 rounded-sm px-5 xl:flex"
            >
              <div className="h-4.5 w-4.5">
                <Icons.QRcode />
              </div>
              <div>
                <div className="font-bold">Show QR code</div>
                <div className="text-left text-xs- opacity-80">
                  to download app
                </div>
              </div>
            </Button>
            <div className="mx-5 hidden text-lg text-blue-primary-300 xl:block">
              or
            </div>
            <div className="flex justify-center space-x-3">
              <button className="rounded-[0.75vh] bg-blue-primary-600 px-[2.875vh] py-[1.25vh] md:px-[2.575vh] md:py-[0.7vh] xl:rounded-sm xl:px-4.5 xl:py-2.5">
                <Icons.AppStoreWithText className="h-[3.4vh] w-[14.2vh] dark:grayscale md:h-[4.16vh]" />
              </button>
              <button className="hidden rounded-[0.75vh] bg-blue-primary-600 px-[2.875vh] py-[1.25vh] md:block md:px-[2.575vh] md:py-[0.7vh] xl:rounded-sm xl:px-4.5 xl:py-2.5">
                <Icons.GooglePlayStoreWithText className="h-[3.6vh] w-[14.6vh] dark:grayscale md:h-[4.16vh]" />
              </button>
            </div>
            <div className="mt-10 flex justify-center md:h-0 md:w-0 md:overflow-hidden">
              <button className="w-fit rounded-full bg-brand-gradient p-[3px]">
                <div className="flex w-fit items-center space-x-4 rounded-full bg-blue-primary-900 px-8 py-4 font-bold capitalize">
                  <div className="h-1.9vh w-[1.8vh] dark:grayscale">
                    <Icons.Play />
                  </div>
                  <div>explanation video</div>
                </div>
              </button>
            </div>
          </div> */}
          {/* INFO: Replace this with Code ubove later */}
          {/* MOBILE only */}
          <div className="mt-10 space-y-10 xl:h-0 xl:w-0 xl:overflow-hidden">
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row xl:flex-col">
            <button className="mx-auto flex items-center justify-center rounded-[0.75vh] bg-blue-primary-600 px-[2.875vh] py-[1.25vh] md:mx-0 xl:mx-auto xl:rounded-lg xl:px-4.5 xl:py-2.5">
              <Icons.AppStoreWithText className="h-[3.4vh] w-[14.2vh] dark:grayscale" />
            </button>
            <button className="mx-auto flex items-center justify-center rounded-[0.75vh] bg-blue-primary-600 px-[2.875vh] py-[1.25vh] md:mx-0 xl:mx-auto xl:rounded-lg xl:px-4.5 xl:py-2.5">
              <Icons.GooglePlayStoreWithText className="h-[3.4vh] w-[14.2vh] dark:grayscale" />
            </button>
            </div>
            <div className="flex justify-center lg:hidden">
              <button className="w-fit rounded-full bg-brand-gradient p-[3px]">
                <div className="flex w-fit items-center space-x-4 rounded-full bg-blue-primary-900 px-8 py-4 font-bold capitalize">
                  <div className="h-1.9vh w-[1.8vh] dark:grayscale">
                    <Icons.Play />
                  </div>
                  <div>explanation video</div>
                </div>
              </button>
            </div>
          </div>
        </div>
        {/* INFO: Right side */}
        <div>
          <div className="absolute left-1/2 -z-10 top-[30%] h-[60vh] w-[100vh] max-w-[70vh] -translate-x-1/2 -translate-y-1/2 mix-blend-hard-light md:top-[40%] md:h-[100vh] md:max-w-none xl:top-1/2 xl:-translate-x-[5%]">
            <ImgWithFallback
              src={'/images/magic-ball-bg-2.webp'}
              fallback={'/images/magic-ball-bg-2.png'}
              alt="magic ball"
              sizes="100vh"
              imgClass='absolute h-full object-fill'
            />
          </div>
          <div className="relative h-[26.25vh] w-[19.375vh] md:h-[34vh] md:w-[26vh] xl:h-[35.95vh] xl:w-[27.9vh]">
            <ImgWithFallback
              src={'/images/magic-ball.webp'}
              fallback={'/images/magic-ball.png'}
              alt="magic ball"
              imgClass={'dark:transition-[filter] dark:duration-300 dark:hover:grayscale-0'}
            />
          </div>
        </div>
      </Container>
      <div className="absolute bottom-15 right-8 hidden lg:block xl:bottom-8">
        <PlayVideo text="Explanation video" description="30s" />
      </div>
    </div>
  );
};

export default Home;
