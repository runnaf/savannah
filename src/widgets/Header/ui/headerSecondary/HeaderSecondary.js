import { NavbarMobile } from "@/feature/Navbar/ui";
import { HeaderPictureSecondary } from "../HeaderPictureSecondary/HeaderPictureSecondary";
import styles from "./HeaderSecondary.module.scss";

export const HeaderSecondary = () => {
    return (
        <header className={styles.header}>
            <HeaderPictureSecondary />
            <NavbarMobile />
        </header>
    )
}