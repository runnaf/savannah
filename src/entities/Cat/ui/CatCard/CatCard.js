import { Text } from "../../../../shared/ui/Text/Text";
import styles from './CatCard.module.scss';
import { arrowIcon } from "../../../../shared/assets/svg/arrowIcon";
import { apiUrl } from "../../../../shared/api/api";

const TELEGRAM_HREF = 'https://t.me/savannahworld';
const CatCard = ({ kittensData, isCatalog = false }) => {
    
    
    return (
        <article className={styles.kittens__card}>
            <img className={styles.kitten__img} src={`${apiUrl}/uploads/${kittensData.image}`} alt='котята Саванны' />
            <div className={styles.card__body}>
                <Text size="l" className={styles.kitten__name}>
                    {kittensData.name_cat}
                </Text>
                <Text size="m" className={styles.description}>
                    Цвет: {kittensData.generate}
                </Text>
                <Text size="m" className={styles.description}>
                    Пол: {kittensData.sex}
                </Text>
                <Text size="m" className={styles.description}>
                    Возраст: {kittensData.age}
                </Text>
                <Text size="m" className={styles.description}>
                    Статус: {kittensData.shipment}
                </Text>
                {isCatalog ? <a href={TELEGRAM_HREF} className={styles.link}>
                    подробнее {arrowIcon()}
                </a>: ''}
            </div>
        </article>
    );
}
export default CatCard;