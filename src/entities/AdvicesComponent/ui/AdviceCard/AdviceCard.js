import { Text } from "../../../../shared/ui/Text/Text";
import { Stack } from "../../../../shared/ui/Stack/Stack";
import styles from "./AdviceCard.module.scss";

const AdviceCard = ({ cat, title, content }) => {
  return (
    <Stack
      justifyContent='justifyBetween'
      className={styles.container}
      gap='32'
    >
      <img src={cat} className={styles.img} alt="Cat" />
      <Stack
        direction='column'
        justifyContent='justifyCenter'
      >
        <Text className={styles.title} type="h2">
          {title}
        </Text>
        <Text className={styles.content} type="p">
          {content}
        </Text>
      </Stack>
    </Stack>
  );
};

export default AdviceCard;


