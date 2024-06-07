import { NavbarDesktop, NavbarMobile } from "../../../../feature/Navbar/ui";
import { HeaderPictureSecondary } from "../HeaderPictureSecondary/HeaderPictureSecondary";
import styles from "./HeaderSecondary.module.scss";

export const HeaderSecondary = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <HeaderPictureSecondary />
                <NavbarMobile />
                <NavbarDesktop />
            </div>
        </header>
    )
}
