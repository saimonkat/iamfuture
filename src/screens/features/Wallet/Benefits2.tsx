import { NamedIcon } from "@/UI/NamedIcon";

import { benefitsPart2, investingList } from "./const";

const Benefits2 = () => {
  return (
    <>
      <div className="flex gap-5 xl:flex-col xl:gap-3">
        <NamedIcon
          {...benefitsPart2[0]}
          textClassName="max-w-none xl:block hidden"
        />
        <div>
          <div className="mb-2.5 text-xl font-bold text-white xl:hidden">
            {benefitsPart2[0].text}
          </div>
          <p className="text-blue-faint">
            Seamless ON and Off ramping of <b>Fiat to crypto</b> and vice versa
            and verified customers can activate their virtual bank account and
            debit card solution enabling spending at millions of retailers
            across the globe
          </p>
          <hr className="mt-10 h-px w-[85%] border-blue-faint xl:hidden" />
        </div>
      </div>

      <div className="flex gap-5 xl:flex-col xl:gap-3">
        <NamedIcon
          {...benefitsPart2[1]}
          textClassName="max-w-none xl:block hidden"
        />
        <div className="space-y-5 text-blue-faint xl:space-y-2">
          <div className="mb-2.5 text-xl font-bold text-white xl:hidden">
            {benefitsPart2[1].text}
          </div>
          <p>Earn yield on your investment and grow your wealth</p>

          <ul className="mt-4 list-disc space-y-2.5 pl-5">
            {investingList.map((text, i) => (
              <li key={i}>{text}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Benefits2;
