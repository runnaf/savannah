
import { Text } from "../../../../shared/ui/Text/Text";
import styles from './OurKittensItem.module.scss';
import kittenImg from '../../../../shared/assets/photo/kitten-1x.png';
import { arrowIcon } from '../../../../shared/assets/svg/arrowIcon';
import { Button } from "../../../../shared/ui/Button/Button";




const OurKittensItem = ({kittensData}) => { 

    return (         
            <article className={styles.kittens__card}>
                <div className={styles.card__image}>
                    <img className={styles.kitten__img} src={kittenImg} alt='котята Саванны' />
                </div>
                <div className={styles.card__body}>
                    <Text size="l" className={styles.kitten__name}>{kittensData.kittenName}</Text>
                    <Text size="m" className={styles.description}>
                        {kittensData.color} :
                    </Text>
                    <Text size="m" className={styles.description}>
                        {kittensData.sex} :
                    </Text>
                    <Text size="m" className={styles.description}>
                        {kittensData.age} :
                    </Text>
                    <Text size="m" className={styles.description}>
                        {kittensData.status} :
                    </Text>
                    <Button className={styles.kitten__btn}>В каталог {arrowIcon()}</Button>
                </div>
            </article>
    );
}
export default OurKittensItem;