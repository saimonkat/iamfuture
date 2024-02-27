import { NamedIcon } from "@/UI/NamedIcon";

import { benefitsPart1, selfCustodyList } from "./const";

const Benefits1 = () => {
  return (
    <>
      <div>
        <NamedIcon {...benefitsPart1[0]} textClassName="max-w-none" />
        <div className="mt-3 text-blue-faint">
          <p className="text-base/5">
            IamFuture wallet is a non-custodial wallet which gives you total
            uninterrupted control of your assets.
          </p>
          <ul className="mt-4 list-disc space-y-2.5 pl-5 text-base/8">
            {selfCustodyList.map((text, i) => (
              <li key={i}>{text}</li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <NamedIcon {...benefitsPart1[1]} textClassName="max-w-none" />
        <div className="mt-3 text-blue-faint">
          <div className="space-y-2 text-base/5">
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
        </div>
      </div>
    </>
  );
};

export default Benefits1;
