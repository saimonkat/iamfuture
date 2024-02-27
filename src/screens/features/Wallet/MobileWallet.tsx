import StaticContent from "./StaticContent";
import Benefits1 from "./Benefits1";
import Benefits2 from "./Benefits2";

const MobileWallet = () => {
  return (
    <div>
      <StaticContent />
      <div className="mt-10 space-y-10 xl:grid xl:grid-cols-2 xl:justify-between xl:gap-6">
        <Benefits1 />
        <Benefits2 />
      </div>
    </div>
  );
};

export default MobileWallet;
