import { Text } from "../../../shared/ui/Text/Text";
import styles from './AboutUs.module.scss';
import aboutPicture from '../../../shared/assets/photo/aboutus.png';
import aboutPicture_2x from '../../../shared/assets/photo/aboutus@2x.png';
import { Stack } from "../../../shared/ui/Stack/Stack";
import { HeaderSection } from "../../../shared/ui/HeaderSection/HeaderSection";

const AboutUs = () => {
    return (
        <section className={styles.section}>
            <HeaderSection section="O питомнике">
                <Text type="h2" size='xl' className={styles.title}>
                    Нас завораживает <span>красота и грация</span> Саванн!
                </Text>
            </HeaderSection>

            <div className={styles.about__row}>
                <img className={styles.picture} src={aboutPicture}
                    srcSet={`${aboutPicture_2x} 2x`} alt="about" />
                <Stack
                    direction='column'
                    alignItems='alignStart'
                    className={styles.text}
                >                 
                    <Text size="m" className={styles.par}>
                        Питомник Savanna World, в лице заводчика Светланы Костроминой зарегистрирован в TICA и обладает всеми необходимыми документами.
                    </Text>
                    <Text size="m" className={styles.par}>
                        Мы стремимся к получению котят прекрасным внешним видом и отличным здоровьем. Поэтому на регулярной основе проводим анализы и осмотры ветеринарным врачом.
                    </Text>
                </Stack>
            </div>
        </section>
    );
}

export default AboutUs;