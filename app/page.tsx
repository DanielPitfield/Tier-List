import "../public/styles/index.scss";
import Tier, { TierLabels } from "./Tier";

const Page = () => {
  return (
    <main>
      {TierLabels.map((TierLabel) => (
        <Tier key={TierLabel} label={TierLabel} />
      ))}
    </main>
  );
};

export default Page;
