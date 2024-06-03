import styles from "./AdviceCard.module.scss";
import { Text } from "../../../../shared/ui/Text/Text";

const AdviceCard = ({ cat, title, content }) => {
  return (
    <div className={styles.container}>
      <div>
        <img src={cat} className={styles.img} alt="Cat" />
      </div>
      <div>
        <Text className={styles.title} type="h2">
          {title}
        </Text>
        <Text className={styles.content} type="p">
          {content}
        </Text>
      </div>
    </div>
  );
};

export default AdviceCard;


