import { Text } from "../../../shared/ui/Text/Text";
import styles from './Benefits.module.scss';
import { Stack } from "../../../shared/ui/Stack/Stack";
import benefitsData from "../lib/data";
import { HeaderSection } from "../../../shared/ui/HeaderSection/HeaderSection";


const Benefits = () => {
    return (
        <section className={styles.section}>
            <HeaderSection section="Почему мы">
                <Text type="h2" size='xl' className={styles.title}>
                    Наши преимущества: <span>опыт и забота</span> о вашем питомце
                </Text>
            </HeaderSection>

            <div className={styles.benefits__row}>
                {benefitsData.map(element =>
                    <Stack
                        gap='32'
                        justifyContent='justifyCenter'
                        alignItems='alignCenter'
                        className={styles.benefit}
                        key={element.id}
                    >

                        {element.img}
                        <Text type="h3" size="s" className={styles.benefit__text}>
                            {element.benefit}
                        </Text>
                    </Stack>
                )}
            </div>
        </section>
    );
}

export default Benefits;