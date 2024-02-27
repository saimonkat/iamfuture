import { NamedIcon } from "@/UI/NamedIcon";

import { benefits, benefits2 } from "./const";

const Concept = () => {
  return (
    <div className="max-w-[80vh] space-y-10 xl:space-y-8">
      <h2 className="mb-18 hidden w-fit bg-brand-gradient bg-clip-text text-2.5xl font-semibold text-transparent xl:block xl:text-4.4xl/normal xl:font-bold">
        Concept
      </h2>
      <h3 className="text-2.5xl font-semibold leading-[110%] tracking-tighter md:text-4xl xl:text-3.4xl">
        IamFuture&#8217;s Goals
      </h3>
      <ul className="space-y-4.25 xl:space-y-3.5">
        {benefits.map(({ icon, text }, i) => (
          <li className="flex items-center space-x-3 text-white" key={i}>
            <div className="h-7.5 w-7.5 flex-shrink-0 self-start xl:h-6 xl:w-6">
              {icon}
            </div>
            <span className="text-1.6xl md:text-base-plus xl:text-base/6">
              {text}
            </span>
          </li>
        ))}
      </ul>
      <p>
        Our ecosystem{" "}
        <b>
          enables individuals to enjoy and take advantage of Web 3 and crypto
        </b>{" "}
        in the form of investment, NFT&#8217;s and gaming while still
        maintaining a symbiotic connection with the FIAT world through our
        virtual bank account and card solution.{" "}
        <span className="block xl:hidden">
          <br />
        </span>
        Catering to both experienced crypto enthusiasts and those navigating the
        space for the first time, IamFuture offers a feature rich, secure and
        intuitive ecosystem where financial freedom and wealth creation are in
        the palm of your hand.
      </p>
      <div className="grid grid-cols-2 gap-x-10 gap-y-8.4 md:max-w-[50vh] md:gap-y-10 xl:max-w-none xl:grid-cols-4 xl:gap-x-8">
        {benefits2.map((benefit, i) => (
          <NamedIcon
            key={i}
            {...benefit}
            className="max-w-[19.375vh] xl:max-w-none"
          />
        ))}
      </div>
    </div>
  );
};

export default Concept;
