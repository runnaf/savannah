import styles from "./Advices.module.scss";
import { adviceData } from "../../lib/adviceData";
import AdviceCard from "../AdviceCard/AdviceCard";
import { Text } from "../../../../shared/ui/Text/Text";
import { Stack } from "../../../../shared/ui/Stack/Stack";

export const Advices = () => {
  return (
    <section className={styles.section}>
      <Stack justifyContent="justifyCenter">
        <Text className={styles.title} type="h2" size="xl">
          СОВЕТЫ НОВЫМ ВЛАДЕЛЬЦАМ <strong>САВАНН</strong>
        </Text>
      </Stack>
      {adviceData.map((item, index) => (
        <AdviceCard
          key={index}
          cat={item.cat}
          title={item.title}
          content={item.content}
          index={index}
        />
      ))}
    </section>
  );
};
