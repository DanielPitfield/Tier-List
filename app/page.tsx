import "../public/styles/index.scss";
import Tier from "./Tier";

const Page = () => {
  return (
    <main>
      <Tier label="S" />
      <Tier label="A" />
      <Tier label="B" />
      <Tier label="C" />
      <Tier label="D" />
    </main>
  );
};

export default Page;
