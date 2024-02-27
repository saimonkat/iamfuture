import { NamedIcon } from "@/UI/NamedIcon";
import { contactLinks } from "@/constants/contactLinks";
import { Icons } from "@/components/icons";
import { Button } from "@/UI/button";

import { benefits } from "./const";

const Forecast = () => {
  return (
    <div className="max-w-[80vh]">
      <h2 className="mb-18 hidden w-fit bg-brand-gradient bg-clip-text text-2.5xl font-bold text-transparent xl:block xl:text-4.4xl/normal">
        Forecast
      </h2>
      <h3 className="text-2.5xl font-semibold leading-[110%] tracking-tighter md:text-4xl xl:text-3.4xl">
        AI-Powered Predictive Insights
      </h3>
      <p className="mt-6">
        Sota blending of generative <b>AI technology</b> with deep analysis of
        market sentiment data makes the navigation of investment opportunities
        easier and supports informed decision making and risk mitigation.
        cutting edge prediction techniques developed by our in-house engineers
        evolves daily generating highly consistent predictions
      </p>
      <div className="mt-10 grid gap-7.5 md:gap-10 xl:mt-8 xl:grid-cols-4 xl:gap-3">
        {benefits.map(({ text, icon, title }, i) => (
          <div
            key={i}
            className="flex items-center gap-7.5 xl:flex-col xl:items-stretch xl:gap-0"
          >
            <NamedIcon
              text={title}
              className="xl:mt-6"
              textClassName="hidden xl:block"
              icon={<div className="h-11.25 w-11.25 xl:h-9 xl:w-9">{icon}</div>}
            />
            <div>
              <div className="mb-2.5 text-xl font-bold xl:hidden">{title}</div>
              <p className="mt-2.5 text-blue-faint">{text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 xl:mt-8">
        <a target="_blank" rel="noreferrer" href={contactLinks.notion}>
          <Button
            size="lg"
            variant="outline"
            className="h-15 space-x-3 rounded-[0.25rem] px-6.5 font-bold xl:h-11 xl:rounded-sm xl:px-5"
          >
            <div className="h-5.625 w-5.625 xl:h-4.5 xl:w-4.5">
              <Icons.SMedia.Notion />
            </div>
            <span className="text-xl font-semibold xl:text-base">
              Documentation
            </span>
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Forecast;
