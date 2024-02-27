import { NamedIcon } from "@/UI/NamedIcon";
import { benefits } from "./consts";

const Token = () => {
  return (
    <div className="max-w-[80vh]">
      <h2 className="mb-18 hidden w-fit bg-brand-gradient bg-clip-text text-4.4xl/normal font-bold text-transparent xl:block">
        Token
      </h2>
      <h3 className="text-2.5xl font-semibold leading-[110%] tracking-tighter md:text-4xl xl:text-3.4xl">
        Future-Driven Digital Finance
      </h3>
      <p className="mt-6">
        Joint community investment incentives planned end of <b>Q2 2024.</b>
        Contribution to the defi landscape within the intuitive platform where
        the decentralized spirit of blockchain&#8217;s utility and investment
        potential is maintained.
      </p>
      <p className="mt-6">
        <b>Limited emission:</b> unlock tailormade investment strategies,
        rewards, unique in-app features, additional income generating sources{" "}
        <b>all in one app.</b>
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
      <p className="mt-5 md:mt-7.5 xl:mt-8">
        And more features and joint initiatives.
      </p>
    </div>
  );
};

export default Token;
