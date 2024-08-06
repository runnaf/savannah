import styles from "./Characteristics.module.scss";
import { Stack } from "../../../shared/ui/Stack/Stack";
import { Text } from "../../../shared/ui/Text/Text";
import { characteristicsData } from "../lib/characteristicsData";
import check from '../../../shared/assets/photo/check.png'
import { HeaderSection } from "../../../shared/ui/HeaderSection/HeaderSection";

const Characteristics = () => {
  return (
    <section className={styles.section}>
      <HeaderSection section="О породе">
        <Text type="h2" size='xl' className={styles.title}>
          <span>Характеристика кошек</span> породы саванна
        </Text>
      </HeaderSection>

      <Stack
        justifyContent="justifyCenter"
        direction="column"
        className={styles.container}
      >
        <ul>
          {characteristicsData.map((item, index) => (
            <li key={index} className={styles.text}>
              <img src={check} alt="Check" className={styles.imgCharact} />
              {item.content}
            </li>
          ))}
        </ul>
      </Stack>
    </section>
  );
};

export default Characteristics;
