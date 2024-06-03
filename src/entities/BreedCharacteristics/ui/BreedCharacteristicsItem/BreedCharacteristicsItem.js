import { Text } from "../../../../shared/ui/Text/Text";
import styles from "./BreedCharacteristicsItem.module.scss" 

export const BreedCharacteristicsItem = (props) => {
    const { data } = props;
    return (
        <Text type = "li" className={styles.item}>
            <Text className={styles.title} type = "h3">{data.title}</Text>
            <Text className={styles.text} type = "p">{data.text}</Text>
            {data.img}
        </Text>
    )
}