import styles from "./Characteristics.module.scss";
import { Stack } from "../../../shared/ui/Stack/Stack";
import { Text } from "../../../shared/ui/Text/Text";
import { characteristicsData } from "../lib/characteristicsData";

const Characteristics = () => {
  return (
    <section className={styles.section}>
      <Text type="h2" size="xl" className={styles.title}>
        ХАРАКТЕРИСТИКИ <strong>САВАНН</strong>
      </Text>
      <Stack
        justifyContent="justifyCenter"
        direction="column"
        className={styles.container}
      >
        <ul>
          {characteristicsData.map((item, index) => (
            <li key={index} className={styles.text}>
              <img src={item.icon} alt="Check" className={styles.imgCharact} />
              {item.content}
            </li>
          ))}
        </ul>

      </Stack>
    </section>
  );
};

export default Characteristics;
