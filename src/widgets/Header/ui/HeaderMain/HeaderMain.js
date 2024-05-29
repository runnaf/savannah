import { arrowIcon } from "@/shared/assets/svg/arrowIcon";
import { Button } from "@/shared/ui/Button/Button";
import { Text } from "@/shared/ui/Text/Text";
import { Stack } from "@/shared/ui/Stack/Stack";
import styles from "./HeaderMain.module.scss";
import { HeaderPictureMain } from "../HeaderPictureMain/HeaderPictureMain";
import { NavbarDesktop } from "@/feature/Navbar/ui";

export const HeaderMain = () => {
    return (
        <Stack justifyContent='justifyCenter'>
            <header className={`${styles.header} header-main`}>
                <HeaderPictureMain />
                <div className={styles.headerContext}>
                    <NavbarDesktop />
                    <div className={styles.titleContainer}>
                        <Text type='h1' className={styles.title}>
                            <span className={styles.text}>Питомник </span> SAVANNAH WORLD
                        </Text>
                        <Button className={styles.buttonHeader} >
                            в каталог {arrowIcon()}
                        </Button>
                    </div>
                </div>
            </header>
        </Stack>
    )
}
