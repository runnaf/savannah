import { Signin } from "../../../../feature/Signin/Signin";
import { arrowIcon } from "../../../../shared/assets/svg/arrowIcon";
import { useModal } from "../../../../shared/hooks/useModal";
import { Button } from "../../../../shared/ui/Button/Button";
import { Text } from "../../../../shared/ui/Text/Text";
import { Stack } from "../../../../shared/ui/Stack/Stack"

import { NavbarContainer } from "../NavbarContainer/NavbarContainer";

import styles from "./styles.module.scss";
import { HeaderPictureMain } from "../HeaderPictureMain/HeaderPictureMain";

export const HeaderMain = ({location}) => {

    const [changeSigninModal, drawSiginModal] = useModal();

    return (
        <Stack justifyContent={'justifyCenter'}>
            <header className={`${styles.header} header-main`}>
                <HeaderPictureMain />
                <div className={styles.headerContext}>
                    {drawSiginModal(
                        <Signin changeSigninModal={changeSigninModal} />
                    )}
                    <NavbarContainer location={location} changeSigninModal={changeSigninModal} />
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