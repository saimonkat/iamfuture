import { NamedIcon } from "@/UI/NamedIcon";

import { benefitsPart2, investingList } from "./const";

const Benefits2 = () => {
  return (
    <>
      <div>
        <NamedIcon {...benefitsPart2[0]} textClassName="max-w-none" />
        <p className="mt-3 text-blue-faint">
          Seamless ON and Off ramping of <b>Fiat to crypto</b> and vice versa
          and verified customers can activate their virtual bank account and
          debit card solution enabling spending at millions of retailers across
          the globe
        </p>
      </div>

      <div>
        <NamedIcon {...benefitsPart2[1]} textClassName="max-w-none" />
        <div className="mt-3 text-blue-faint">
          <div className="space-y-2">
            <p>Earn yield on your investment and grow your wealth</p>

            <ul className="mt-4 list-disc space-y-2.5 pl-5">
              {investingList.map((text, i) => (
                <li key={i}>{text}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefits2;
