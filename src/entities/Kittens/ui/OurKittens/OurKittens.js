import styles from './OurKittens.module.scss';
import { Text } from "../../../../shared/ui/Text/Text";
import CatSlider from '../../../CatSlider/CatSlider';
import { HeaderSection } from '../../../../shared/ui/HeaderSection/HeaderSection';

const OurKittens = () => {

    return (
        <section className={styles.section}>
            <HeaderSection section="Наши котята" hasButton >
                <Text tag="h2" size='xl' className={styles.title}>
                    Выберите себе <span>питомца</span> в нашем каталоге
                </Text>
            </HeaderSection>
            <div className={styles.kittens__row}>
                <CatSlider />
            </div>
        </section>
    )
}
export default OurKittens;
