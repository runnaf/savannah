import { Text } from "../../../../shared/ui/Text/Text";
import { data } from "../../bd/bs";
import { BreedCharacteristicsItem } from "../BreedCharacteristicsItem/BreedCharacteristicsItem";

import styles from "./BreedCharacteristics.module.scss"

export const BreedCharacteristics = () => {
    console.log(data)
    return (
        <section className={styles.breedCharacteristics}>
            <Text className={styles.title} type="h2">ХАРАКТЕРИСТИКИ САВАНН</Text>
            <ul className={styles.container}>
                {data.map( item => <BreedCharacteristicsItem 
                        key = {item.title}
                        data = {item}
                        />                  
                )}
            </ul>
        </section>
    )
}