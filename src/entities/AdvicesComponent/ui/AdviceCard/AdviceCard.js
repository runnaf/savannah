import { Text } from "../../../../shared/ui/Text/Text";
import { Stack } from "../../../../shared/ui/Stack/Stack";
import styles from "./AdviceCard.module.scss";

const AdviceCard = ({ cat, title, content, index }) => {
  return (
    <Stack justifyContent="justifyBetween" className={styles.container}>
      <img src={cat} width='240 px' className={index % 2 === 0 ? styles.img : styles.imgRev} alt="Cat" />
      <div>
        <Text className={styles.title} type="h2">
          {title}
        </Text>
        <Text className={styles.content} type="p">
          {content}
        </Text>
      </div>
    </Stack>
  );
};

export default AdviceCard;


     