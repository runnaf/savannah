import styles from "./Advices.module.scss";
import { adviceData } from "../../lib/adviceData";
import AdviceCard from "../AdviceCard/AdviceCard";
import { Text } from "../../../../shared/ui/Text/Text";
import { Stack } from "../../../../shared/ui/Stack/Stack";

export const Advices = () => {
  return <Stack>
        <div className={styles.cont}>
      <Text className={styles.title} type='h2'>СОВЕТЫ НОВЫМ ВЛАДЕЛЬЦАМ САВАНН</Text>
      {adviceData.map((item, index) => (
        <AdviceCard
          key={index}
          cat={item.cat}
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
  </Stack>;
};
