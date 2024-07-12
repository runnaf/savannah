import { HeaderSection } from "../../../../shared/ui/HeaderSection/HeaderSection.js";
import { Text } from "../../../../shared/ui/Text/Text";
import { data } from "../../lib/data.js";
import { BreedCharacteristicsItem } from "../BreedCharacteristicsItem/BreedCharacteristicsItem";
import styles from "./BreedCharacteristics.module.scss"

export const BreedCharacteristics = () => {
    return (
        <section className={styles.section}>
            <HeaderSection section="Подгруппы">
                <Text tag="h2" size='xl' className={styles.title}>
                    <span>Генетические подгруппы</span> породы саванна
                </Text>
            </HeaderSection>

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