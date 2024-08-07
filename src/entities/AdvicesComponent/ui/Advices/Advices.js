import styles from "./Advices.module.scss";
import { adviceData } from "../../lib/adviceData";
import AdviceCard from "../AdviceCard/AdviceCard";
import { Text } from "../../../../shared/ui/Text/Text";
import { HeaderSection } from "../../../../shared/ui/HeaderSection/HeaderSection";

export const Advices = () => {
  return (
    <section className={styles.section}>
      <HeaderSection section="Советы">
        <Text type="h2" size='xl' className={styles.title}>
          На заметку владельцам: <span>советы и рекомендации</span>
        </Text>
      </HeaderSection>
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
