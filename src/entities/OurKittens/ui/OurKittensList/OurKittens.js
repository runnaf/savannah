import { Text } from "../../../../shared/ui/Text/Text";
import kittensData from '../../lib/data';
import Kittens from '../OurKittensItem/Kittens';
import styles from './OruKittens.module.scss';

const OurKittens = () => {
    return (
        <section className={styles.section}>
            <Text type="h2" size="xl" className={styles.title}>
                НАШИ КОТЯТА
            </Text>
            <Kittens kittensData={kittensData} />
        </section>
    );
}

export default OurKittens;
