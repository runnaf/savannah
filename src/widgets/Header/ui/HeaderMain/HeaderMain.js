import { arrowIcon } from "../../../../shared/assets/svg/arrowIcon";
import { Text } from "../../../../shared/ui/Text/Text";
import { Stack } from "../../../../shared/ui/Stack/Stack";
import styles from "./HeaderMain.module.scss";
import { HeaderPictureMain } from "../HeaderPictureMain/HeaderPictureMain";
import { NavbarDesktop, NavbarMobile } from "../../../../feature/Navbar/ui";
import { getStyle } from "../../../../shared/helper/getStyle";
import { Link } from "react-router-dom";

export const HeaderMain = () => {
    const catalog = '/catalog'
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
                        <Link to={catalog} className={styles.linkHeader} >
                            в каталог {arrowIcon()}
                        </Link>
                    </div>
                </div>
            </header>
        </Stack>
    )
}
