import { HeaderPictureSecondary } from "../HeaderPictureSecondary/HeaderPictureSecondary";
import { NavbarContainer } from "../NavbarContainer/NavbarContainer";
import styles from "./HeaderSecondary.module.scss";

export const HeaderSecondary = () => {
    return (
        <header className={styles.header}>
            <HeaderPictureSecondary />
            <NavbarContainer />
        </header>
    )
}