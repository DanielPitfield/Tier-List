import styles from "../public/styles/Tier.module.scss";
import TierContainer from "./TierContainer";

export const TierLabels = ["S", "A", "B", "C", "D"] as const;
export type TierLabel = (typeof TierLabels)[number];

interface TierProps {
  label: TierLabel;
}

const Tier = (props: TierProps) => {
  return (
    <section className={styles.wrapper}>
      <label className={styles.label} data-label={props.label}>
        {props.label}
      </label>
      <TierContainer label={props.label} />
    </section>
  );
};

export default Tier;
