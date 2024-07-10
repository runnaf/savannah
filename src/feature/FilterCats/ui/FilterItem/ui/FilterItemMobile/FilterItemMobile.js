import Checkbox from "../../../../../../shared/ui/Checkbox/Checkbox"
import { Text } from "../../../../../../shared/ui/Text/Text"
import styles from "./FilterItemMobile.module.scss"

export const FilterItemMobile = ({select, options}) => {
    return (
        <li className={styles.container}>
            <Text type='h3' className={styles.title}>{select}</Text>
            <ul className={styles.listMobile}>
                {options?.map((option) => (
                <li className={styles.item}  key={option}>
                    <Checkbox nameField={option} />
                </li>
                ))}
            </ul>
        </li>
    )
}
