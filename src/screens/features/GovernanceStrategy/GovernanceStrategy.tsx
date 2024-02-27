import { NamedIcon } from "@/UI/NamedIcon";
import { contactLinks } from "@/constants/contactLinks";
import { Icons } from "@/components/icons";
import { Button } from "@/UI/button";

import { benefits } from "./consts";

const GovernanceStrategy = () => {
  return (
    <div className="max-w-[80vh]">
      <h2 className="mb-18 hidden w-fit bg-brand-gradient bg-clip-text text-4.4xl/normal font-bold text-transparent xl:block">
        IamF Governance Strategy
      </h2>
      <h3 className="text-2.5xl font-semibold leading-[110%] tracking-tighter md:text-4xl xl:text-3.4xl">
        Put the Future into Focus
      </h3>
      <p className="mt-6">
        Investment, community prosperity and wealth management are core pillars
        of our vision. Our community is part of the decision making process and
        social value generation as we evolve.{" "}
        <span className="block xl:hidden">
          <br />
        </span>
        Soft governance opportunities to steer feature & functionality upgrades,
        joint liquidity pools investment vehicles and strategic incentives to
        support humanity&#8217;s growth while generating returns for our
        community members.
      </p>
      <div className="mt-7.5 grid gap-7.5 md:max-w-[50vh] md:grid-cols-2 md:gap-10 xl:mt-8 xl:max-w-none xl:grid-cols-4 xl:gap-3">
        {benefits.map(({ icon, title }, i) => (
          <NamedIcon
            key={i}
            text={title}
            className="flex items-center md:flex-col md:items-start"
            textClassName="ml-3.75 mt-0 md:ml-0 md:mt-6 max-w-none"
            icon={<div className="h-11.25 w-11.25 xl:h-9 xl:w-9">{icon}</div>}
          />
        ))}
      </div>

      <div className="mt-11 hidden md:flex">
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

export default GovernanceStrategy;
