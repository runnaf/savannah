import styles from './OurKittens.module.scss';
import { Text } from "../../../../shared/ui/Text/Text";
import { Stack } from '../../../../shared/ui/Stack/Stack';
import kittensData from "../../../../entities/CatCard/lib/data";
import CatCard from '../../../../entities/CatCard/ui/CatCard/CatCard';

const OurKittens = () => {
    return (
        <section className={styles.section}>
            <Stack justifyContent='justifyCenter'>
                <Text type="h2" size="xl" className={styles.title}>
                    НАШИ <strong>КОТЯТА</strong>
                </Text>
            </Stack>

            <div className={styles.kittens__row}>
                {kittensData.map(element =>
                    <CatCard
                        key={element.id}
                        kittensData={element}
                        isMain
                    />
                )}
            </div>
        </section>
    )
}

export default OurKittens;
