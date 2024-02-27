import Benefits1 from "./Benefits1";

const Wallet2 = () => {
  return (
    <div className="space-y-8 max-w-[80vh]">
      <h2 className="bg-brand-gradient mb-18 w-fit bg-clip-text text-4.4xl/normal font-bold text-transparent">
        Wallet
      </h2>
      <h3 className="text-3.4xl font-semibold leading-[110%] tracking-tighter">
        Send, receive, swap — all with just a few taps!
      </h3>
      <p>
        IamFuture wallet intuitively connects web3 and decentralised finance
        (defi) with traditional finance (tradfi). One wallet ecosystem enables
        you <b>full control of your money</b>, investments and future. Enhanced
        security and
        <b>user-friendly interface</b> provides the best experience of storing,
        managing and transacting
      </p>
      {/* INFO: Benefits1 and Benefits2 should display one by one */}
      <div className="grid grid-cols-2 justify-between gap-6">
        <Benefits1 />
      </div>
    </div>
  );
};

export default Wallet2;
