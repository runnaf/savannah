import styles from "./Advices.module.scss";
import { adviceData } from "../../lib/adviceData";
import AdviceCard from "../AdviceCard/AdviceCard";
import { Text } from "../../../../shared/ui/Text/Text";

export const Advices = () => {
  return (
    <section className={styles.section}>
      <Text className={styles.title} type='h2'>
        СОВЕТЫ НОВЫМ ВЛАДЕЛЬЦАМ САВАНН
      </Text>
      {adviceData.map((item, index) => (
        <AdviceCard
          key={index}
          cat={item.cat}
          title={item.title}
          content={item.content}
        />
      ))}
    </section>
  );
};


