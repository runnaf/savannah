import { Text } from "../../shared/ui/Text/Text";
import styles from './AboutUs.module.scss';
import aboutPicture from '../../shared/assets/photo/aboutus.png';
import { Stack } from "../../shared/ui/Stack/Stack";

const AboutUs = () => {
    return (
        <>
            <section className={styles.section}>
                <Stack justifyContent='justifyCenter'>
                    <Text type="h2" size="xl" className={styles.title}>
                        О ПИТОМНИКЕ <strong>SAVANNAH WORLD</strong>
                    </Text>
                </Stack>

                <div className={styles.about__row}>
                    <img className={styles.picture} src={aboutPicture} alt="about" />
                    <Stack
                        direction='column'
                        alignItems='alignStart'
                        className={styles.text}
                    >
                        <Text size="m" className={styles.par}>
                            Нас завораживает красота и грация Саванн!
                        </Text>
                        <Text size="m" className={styles.par}>
                            Питомник Savanna World, в лице заводчика Светланы Костроминой зарегистрирован в TICA и обладает всеми необходимыми документами.
                        </Text>
                        <Text size="m" className={styles.par}>
                            Мы стремимся к получению котят прекрасным внешним видом и отличным здоровьем. Поэтому на регулярной основе проводим анализы и осмотры ветеринарным врачом.
                        </Text>
                    </Stack>
                </div>
            </section>
            <section className={styles.section}>
                <Stack justifyContent='justifyCenter'>
                    <Text type="h2" size="xl" className={styles.title}>
                        ПИТОМНИК <strong>SAVANNAH WORLD</strong> ЭТО -
                    </Text>
                </Stack>

                <Stack
                    gap='32'
                    justifyContent='justifyCenter'
                    alignItems='alignStart'
                    className={styles.benefits__row}
                >
                    <div className={styles.benefit__doc}>
                        <Text type="h3" size="s" className={styles.benefit__text}>
                            Документация согласно стандартам породы
                        </Text>
                    </div>
                    <div className={styles.benefit__vet}>
                        <Text type="h3" size="s" className={styles.benefit__text}>
                            Полное ветеринарное обследование и вакцинация
                        </Text>
                    </div>
                    <div className={styles.benefit__question}>
                        <Text type="h3" size="s" className={styles.benefit__text}>
                            Консультация по вопросам содержания и воспитания
                        </Text>
                    </div>
                </Stack>
            </section>
        </>
    );
}

export default AboutUs;