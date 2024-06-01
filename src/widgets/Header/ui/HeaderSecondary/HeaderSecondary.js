import { NavbarDesktop, NavbarMobile } from "../../../../feature/Navbar/ui";
import { HeaderPictureSecondary } from "../HeaderPictureSecondary/HeaderPictureSecondary";
<<<<<<< HEAD:src/widgets/Header/ui/headerSecondary/HeaderSecondary.js
import { NavbarContainer } from "../navbarContainer/NavbarContainer";
=======
>>>>>>> 7d4bd790d01e9b042b9e20b403c9d7552ae3ec83:src/widgets/Header/ui/HeaderSecondary/HeaderSecondary.js
import styles from "./HeaderSecondary.module.scss";

export const HeaderSecondary = () => {
    return (
        <header className={styles.header}>
            <HeaderPictureSecondary />
            <NavbarMobile />
            <NavbarDesktop />
        </header>
    )
}
