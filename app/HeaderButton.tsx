import styles from "../public/styles/HeaderButton.module.scss";
import { IconType } from "react-icons";

interface HeaderButtonProps {
  text: string;
  icon: IconType;
  onClick: () => void;
  disabled?: boolean;
}

const HeaderButton = (props: HeaderButtonProps) => {
  return (
    <button className={styles.button} onClick={props.onClick} disabled={props.disabled}>
      <props.icon className={styles.icon} />
      {props.text}
    </button>
  );
};

export default HeaderButton;
