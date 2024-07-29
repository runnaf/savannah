import { Text } from "../../../../shared/ui/Text/Text";
import styles from './CatCard.module.scss';
import { arrowIcon } from "../../../../shared/assets/svg/arrowIcon";
import { apiUrl } from "../../../../shared/api/api";
import kittensData from "../../lib/data";

const TELEGRAM_HREF = 'https://t.me/savannahworld';
const CatCard = ({ cat = kittensData, isCatalog = false }) => {
    const { image, name_cat, generate, sex, age, shipment } = cat;
    
    
    return (
        <article className={styles.kittens__card}>
            <img className={styles.kitten__img} src={`${apiUrl}/uploads/${image}`} alt='котята Саванны' />
            <div className={styles.card__body}>
                <Text size="l" className={styles.kitten__name}>
                    {name_cat}
                </Text>
                <Text size="m" className={styles.description}>
                    Цвет: {generate}
                </Text>
                <Text size="m" className={styles.description}>
                    Пол: {sex}
                </Text>
                <Text size="m" className={styles.description}>
                    Возраст: {age}
                </Text>
                <Text size="m" className={styles.description}>
                    Статус: {shipment}
                </Text>
                {isCatalog ? <a href={TELEGRAM_HREF} className={styles.link}>
                    подробнее {arrowIcon()}
                </a>: ''}
            </div>
        </article>
    );
}
export default CatCard;