import { Text } from "../../../shared/ui/Text/Text";
import styles from './Benefits.module.scss';
import { Stack } from "../../../shared/ui/Stack/Stack";
import benefitsData from "../lib/data";


const Benefits = () => {
    return (
        <section className={styles.section}>
            <Stack justifyContent='justifyCenter'>
                <Text type="h2" size="xl" className={styles.title}>
                    ПОЧЕМУ ИМЕННО <strong>МЫ</strong>
                </Text>
            </Stack>

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