import { Link } from "react-router-dom";
import { arrowIcon } from "../../../../shared/assets/svg/arrowIcon";
import { Text } from "../../../../shared/ui/Text/Text";
import { HeaderPictureMain } from "../HeaderPictureMain/HeaderPictureMain";
import { NavbarMobile } from '../../../../feature/Navbar/ui/NavbarMobile/NavbarMobile';
import { NavbarDesktop } from '../../../../feature/Navbar/ui/NavbarDesktop/NavbarDesktop';
import { getStyle } from "../../../../shared/helper/getStyle";
import { Stack } from "../../../../shared/ui/Stack/Stack";
import { getRouteCatalog } from "../../../../app/providers/router/config/helpers";
import styles from "./HeaderMain.module.scss";
import { HeaderLogo } from "../HeaderLogo/HeaderLogo";
import { HeaderContact } from "../HeaderContact/ui/HeaderContact";

export const HeaderMain = () => {
    return (
        <Stack justifyContent='justifyCenter'>
            <header className={getStyle(styles.header, {}, [styles.headerMain])}>
                <HeaderContact />
                <div className={styles.container}>
                    <div className={styles.wrapper}>
                        <HeaderLogo />
                        <NavbarMobile />
                        <NavbarDesktop />
                    </div>
                </div>
                <div className={styles.headerContext}>
                    <div className={styles.titleContainer}>
                        <Text type='h1' className={styles.title}>
                            SAVANNAH WORLD<br />
                            <span className={styles.text}>Питомник кошек Саванны </span>
                        </Text>
                        <Link to={getRouteCatalog()} className={styles.linkHeader}>
                            в каталог {arrowIcon()}
                        </Link>
                    </div>
                    <HeaderPictureMain />
                </div>
            </header>
        </Stack>
    );
};
