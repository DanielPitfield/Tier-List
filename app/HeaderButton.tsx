import styles from "../public/styles/HeaderButton.module.scss";
import { IconType } from "react-icons";

interface HeaderButtonProps {
  text: string;
  icon: IconType;
  onClick: () => void;
}

const HeaderButton = (props: HeaderButtonProps) => {
  return (
    <div className={styles.wrapper}>
      <button onClick={props.onClick}>
        <props.icon className={styles.icon} />
        {props.text}
      </button>
    </div>
  );
};

export default HeaderButton;
