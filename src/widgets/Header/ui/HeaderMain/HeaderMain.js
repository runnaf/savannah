import { Link } from "react-router-dom";

import { arrowIcon } from "../../../../shared/assets/svg/arrowIcon";
import { Text } from "../../../../shared/ui/Text/Text";
import { HeaderPictureMain } from "../HeaderPictureMain/HeaderPictureMain";
import { NavbarDesktop, NavbarMobile } from "../../../../feature/ui/Navbar/ui";
import { getStyle } from "../../../../shared/helper/getStyle";
import { Stack } from "../../../../shared/ui/Stack/Stack";
import { getRouteCatalog } from "../../../../app/providers/router/config/helpers";

import styles from "./HeaderMain.module.scss";
import { ScrollToTop } from "../../../../feature/hooks/scrollToTop";

export const HeaderMain = () => {
    return (
        <Stack justifyContent='justifyCenter'>
            <header className={getStyle(styles.header, {}, [styles.headerMain])}>
                <HeaderPictureMain />
                <div className={styles.headerContext}>
                    <NavbarDesktop className={styles.navbarMain}/>
                    <NavbarMobile />
                    <div className={styles.titleContainer}>
                        <Text type='h1' className={styles.title}>
                            <span className={styles.text}>Питомник </span> SAVANNAH WORLD
                        </Text>
                        <Link to={getRouteCatalog()} className={styles.linkHeader} onClick={ScrollToTop()}>
                            в каталог {arrowIcon()}
                        </Link>
                    </div>
                </div>
            </header>
        </Stack>
    );
};
