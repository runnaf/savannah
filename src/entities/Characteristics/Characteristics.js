import styles from "./Characteristics.module.scss";
import { Stack } from "../../shared/ui/Stack/Stack";
import { Text } from "../../shared/ui/Text/Text";
import check from "../../shared/assets/photo/check.png";

const Characteristics = () => {
  return (
    <section className={styles.section}>
      <Text type="h2" size="xl" className={styles.title}>
        ХАРАКТЕРИСТИКИ САВАНН
      </Text>
      <Stack
        justifyContent="justifyCenter"
        direction='column'
        className={styles.container}
      >

        {/* ИСПОЛЬЗОВАТЬ MAP - и корневой докуменнт должен быть ul,  а каждый его элемент li */}
        <div className={styles.block}>
          <img src={check} alt="Иконка" width="50px" />
          <Text size="m" className={styles.text}>
            Порода выведена путем скрещивания сервала и домашней кошки
          </Text>
        </div>
        <div className={styles.block}>
          <img src={check} alt="Иконка" width="50px" />
          <Text size="m" className={styles.text}>
            Умные, активные и общительные кошки с игривым характером
          </Text>
        </div>
        <div className={styles.block}>
          <img src={check} alt="Иконка" width="50px" />
          <Text size="m" className={styles.text}>
            Саванные имеют длинные ноги, короткую шерста и крупные уши
          </Text>
        </div>
        <div className={styles.block}>
          <img src={check} alt="Иконка" width="50px" />
          <Text size="m" className={styles.text}>
            Рост саванн достигает 60 см, а вес доходит до 15 кг
          </Text>
        </div>
      </Stack>
    </section>
  );
};

export default Characteristics;
