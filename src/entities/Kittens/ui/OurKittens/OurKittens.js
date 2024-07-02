import styles from './OurKittens.module.scss';
import { Text } from "../../../../shared/ui/Text/Text";
import { Stack } from '../../../../shared/ui/Stack/Stack';
import CatSlider from '../../ui/CatSlider/CatSlider';

const OurKittens = () => {

    return (
        <section className={styles.section}>
            <Stack justifyContent='justifyCenter'>
                <Text type="h2" size="xl" className={styles.title}>
                    НАШИ <strong>КОТЯТА</strong>
                </Text>
            </Stack>
            <div className={styles.kittens__row}>
                <CatSlider />
            </div>
        </section>
    )
}
export default OurKittens;
