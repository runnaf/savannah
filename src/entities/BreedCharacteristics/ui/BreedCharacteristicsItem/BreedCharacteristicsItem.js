import { Text } from "../../../../shared/ui/Text/Text";
import styles from "./BreedCharacteristicsItem.module.scss";

export const BreedCharacteristicsItem = (props) => {
    const { data } = props;
    return (
        <Text type="li" className={styles.item}>
            <span className={styles.title}>
                {data.title}
            </span>
            <span className={styles.text}>
                {data.text}
            </span>
            {data.img}
        </Text>
    );
};
