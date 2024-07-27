import { HeaderContact } from "../HeaderContact/ui/HeaderContact";
import styles from "./HeaderSecondary.module.scss";
import { HeaderLinks } from "../HeaderLinks/HeaderLinks";

export const HeaderSecondary = () => {
    return (
        <header className={styles.header}>
            <HeaderContact />
            <HeaderLinks />
        </header>
    )
}
