import { Button } from '../../../../shared/ui/Button/Button'
import { Stack } from '../../../../shared/ui/Stack/Stack';
import { Text } from "../../../../shared/ui/Text/Text";
import styles from './OruKittens.module.scss';
import kittenImg from '../../../../shared/assets/photo/kitten-1x.png';
import { arrowIcon } from '../../../../shared/assets/svg/arrowIcon';


const OurKittens = () => {
    return (
        <section className={styles.section}>
            <Stack justifyContent='justifyCenter'>
                <Text type="h2" size="xl" className={styles.title}>
                    НАШИ КОТЯТА
                </Text>
            </Stack>

            <div className={styles.container}>
                <div className={styles.kittens__row}>
                    <div className={styles.card__item__one}>
                        <article className={styles.kittens__card}>
                            <div className={styles.card__image}>
                                <img className={styles.kitten__img} src={kittenImg} alt='котята Саванны' />
                            </div>
                            <div className={styles.card__body}>
                                <Text size="l" className={styles.kitten__name}>Имя</Text>
                                <Text size="m" className={styles.description}>
                                    Описание Описание Описание Описание Описание Описание
                                </Text>
                                <Button className={styles.kitten__btn}>В каталог {arrowIcon()}</Button>
                            </div>
                        </article>
                    </div>

                    <div className={styles.card__item__two}>
                        <article className={styles.kittens__card}>
                            <div className={styles.card__image}>
                                <img className={styles.kitten__img} src={kittenImg} alt='котята Саванны' />
                            </div>
                            <div className={styles.card__body}>
                                <Text size="l" className={styles.kitten__name}>Имя</Text>
                                <Text size="m" className={styles.description}>
                                    Описание Описание Описание Описание
                                </Text>
                                <Button className={styles.kitten__btn}>В каталог {arrowIcon()}</Button>
                            </div>
                        </article>
                    </div>
                    <div className={styles.card__item__three}>
                        <article className={styles.kittens__card}>
                            <div className={styles.card__image}>
                                <img className={styles.kitten__img} src={kittenImg} alt='котята Саванны' />
                            </div>

                            <div className={styles.card__body}>
                                <Text size="l" className={styles.kitten__name}>Имя</Text>
                                <Text size="m" className={styles.description}>
                                    Описание Описание
                                </Text>
                                <Button className={styles.kitten__btn}>В каталог {arrowIcon()}</Button>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OurKittens;