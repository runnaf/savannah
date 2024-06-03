import { Text } from "../../../../shared/ui/Text/Text";
import { data } from "../../lib/data.js";
import { BreedCharacteristicsItem } from "../BreedCharacteristicsItem/BreedCharacteristicsItem";

import styles from "./BreedCharacteristics.module.scss"

export const BreedCharacteristics = () => {
    return (
        <section className={styles.section}>
            <Text className={styles.title} type="h2">
                ХАРАКТЕРИСТИКИ САВАНН
            </Text>
            <ul className={styles.container}>
                {data.map(item =>
                    <BreedCharacteristicsItem
                        key={item.title}
                        data={item}
                    />
                )}
            </ul>
        </section>
    )
}