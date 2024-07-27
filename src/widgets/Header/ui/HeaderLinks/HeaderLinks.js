import { NavbarDesktop } from '../../../../feature/Navbar/ui/NavbarDesktop/NavbarDesktop';
import { NavbarMobile } from '../../../../feature/Navbar/ui/NavbarMobile/NavbarMobile';
import { HeaderLogo } from '../HeaderLogo/HeaderLogo';
import styles from './HeaderLinks.module.scss';

export const HeaderLinks = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <HeaderLogo />
                <NavbarMobile />
                <NavbarDesktop />
            </div>
        </div>
    )
}