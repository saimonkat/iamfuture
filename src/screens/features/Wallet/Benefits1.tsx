import { NamedIcon } from "@/UI/NamedIcon";

import { benefitsPart1, selfCustodyList } from "./const";

const Benefits1 = () => {
  return (
    <>
      <div className="flex gap-5 xl:flex-col xl:gap-3">
        <NamedIcon
          {...benefitsPart1[0]}
          textClassName="max-w-none xl:block hidden"
        />
        <div className="text-blue-faint">
          <div className="mb-2.5 text-xl font-bold text-white xl:hidden">
            {benefitsPart1[0].text}
          </div>
          <p className="text-base-plus/6 md:text-base/5">
            IamFuture wallet is a non-custodial wallet which gives you total
            uninterrupted control of your assets.
          </p>
          <ul className="mt-4 list-disc pl-5 text-base-plus/5 md:text-base/8">
            {selfCustodyList.map((text, i) => (
              <li key={i}>{text}</li>
            ))}
          </ul>
          <hr className="mt-10 h-px w-[85%] border-blue-faint xl:hidden" />
        </div>
      </div>

      <div className="flex gap-5 xl:flex-col xl:gap-3">
        <NamedIcon
          {...benefitsPart1[1]}
          textClassName="max-w-none xl:block hidden"
        />
        <div>
          <div className="space-y-5 text-base-plus/6 text-blue-faint md:text-base/5 xl:space-y-2">
            <div className="mb-2.5 text-xl font-bold text-white xl:hidden">
              {benefitsPart1[1].text}
            </div>
            <p>
              The IamFuture DEX offers full freedom{" "}
              <b>to buy, sell, send, receive and swap</b> tokens across all
              major chains natively (EVM and Non EVM)
            </p>

            <p>
              Access the largest selection of tokens at the best pricing and
              lowest fees without leaving the <b>comfort</b> of your wallet and
              directly enjoy fully decentralized swapping <b>before KYC</b>
            </p>

            <p>Buying and selling to and from FIAT for verified users</p>
          </div>
          <hr className="mt-10 h-px w-[85%] border-blue-faint xl:hidden" />
        </div>
      </div>
    </>
  );
};

export default Benefits1;
