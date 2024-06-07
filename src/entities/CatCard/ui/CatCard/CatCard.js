import { Text } from "../../../../shared/ui/Text/Text";
import styles from './CatCard.module.scss';
import { arrowIcon } from '../../../../shared/assets/svg/arrowIcon';
import { Button } from "../../../../shared/ui/Button/Button";

const CatCard = ({ kittensData, isMain }) => {
    return (
        <article className={styles.kittens__card}>
            <img className={styles.kitten__img} src={kittensData.kittenImg} alt='котята Саванны' />
            <div className={styles.card__body}>
                <Text size="l" className={styles.kitten__name}>
                    {kittensData.kittenName}
                </Text>
                <Text size="m" className={styles.description}>
                    Цвет: {kittensData.color}
                </Text>
                <Text size="m" className={styles.description}>
                    Пол: {kittensData.sex}
                </Text>
                <Text size="m" className={styles.description}>
                    Возраст: {kittensData.age}
                </Text>
                <Text size="m" className={styles.description}>
                    Статус: {kittensData.status}
                </Text>
                <Button className={styles.kitten__btn}>
                    {isMain ? 'в каталог' : 'подробнее'} {arrowIcon()}
                </Button>
            </div>
        </article>
    );
}
export default CatCard;