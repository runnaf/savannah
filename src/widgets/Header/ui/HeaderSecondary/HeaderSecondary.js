import { NavbarMobile } from "../../../../feature/Navbar/ui/NavbarMobile/NavbarMobile";
import { NavbarDesktop } from '../../../../feature/Navbar/ui/NavbarDesktop/NavbarDesktop';
import { HeaderLogo } from "../HeaderLogo/HeaderLogo";
import { HeaderContact } from "../HeaderContact/ui/HeaderContact";
import styles from "./HeaderSecondary.module.scss";

export const HeaderSecondary = () => {
    return (
        <header className={styles.header}>
            <HeaderContact />
            <div className={styles.container}>
                <HeaderLogo />
                <NavbarMobile />
                <NavbarDesktop />
            </div>
        </header>
    )
}
