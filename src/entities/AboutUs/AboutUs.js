import { Stack } from "../../shared/ui/Stack/Stack";
import { Text } from "../../shared/ui/Text/Text";
import styles from './AboutUs.module.scss';
import aboutPicture from '../../shared/assets/photo/aboutus.png';

const AboutUs = () => {
    return (
        <div>
            <section className={styles.section}>                    
                <Stack>
                    <Text type="h2" size="xl" className={styles.title}>
                        О ПИТОМНИКЕ <strong>SAVANNAH WORLD</strong>
                    </Text>
                </Stack>
                <div className={styles.container}>
                    <div className={styles.about__row}>               
                        <div>
                            <img className={styles.picture} src={aboutPicture} alt="about"/>
                        </div>
                        <Stack                           
                            direction = 'column'
                            alignItems='alignStart'
                            className={styles.text}>
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
                    </div>
            </section>
            <section className={styles.section}>
                <Stack>
                    <Text type="h2" size="xl" className={styles.title}>
                        ПИТОМНИК <strong>SAVANNAH WORLD</strong> ЭТО -
                    </Text>
                </Stack>
                <div className={styles.container}>
                    <Stack
                        gap='32'
                        justifyContent='justifyCenter'
                        alignItems='alignStart'
                        className={styles.benefits__row}>
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
                </div>
            </section>
        </div>
    );
}

export default AboutUs;