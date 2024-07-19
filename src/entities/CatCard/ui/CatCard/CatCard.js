import { Text } from "../../../../shared/ui/Text/Text";
import styles from './CatCard.module.scss';


const CatCard = ({ kittensData }) => {
    
    
    return (
        <article className={styles.kittens__card}>
            <img className={styles.kitten__img} src={kittensData.images} alt='котята Саванны' />
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
              
            </div>
        </article>
    );
}
export default CatCard;