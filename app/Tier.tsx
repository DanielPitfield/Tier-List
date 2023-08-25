import styles from "../public/styles/Tier.module.scss";

interface TierProps {
  label: string;
}

const Tier = (props: TierProps) => {
  return (
    <section className={styles.wrapper}>
      <label className={styles.label} data-label={props.label}>
        {props.label}
      </label>
      <div className={styles.container}></div>
    </section>
  );
};

export default Tier;
