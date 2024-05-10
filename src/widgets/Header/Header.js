import { Navbar } from "../../feature/Navbar/Navbar";
import { Signin } from "../../feature/Signin/Signin";
import { arrowIcon } from "../../shared/assets/svg/arrowIcon";
import { useModal } from "../../shared/hooks/useModal";
import { Button } from "../../shared/ui/Button/Button";
import { Text } from "../../shared/ui/Text/Text";
import desktopPicture from "../../shared/assets/photo/header_cat.png";
import styles from "./styles.module.scss";

export const Header = () => {

    const [changeSigninModal, drawSiginModal] = useModal();

    return (
        <header className={styles.header}>
            {drawSiginModal(
                <Signin changeSigninModal={changeSigninModal} />
            )}

            <div className={styles.navbar}>
                <Navbar />
                <Button
                    onClick={changeSigninModal}
                    className={styles.buttonSigin}
                    variant="secondary"
                >
                    войти
                </Button>
            </div>
            <img
                className={styles.picture}
                src={desktopPicture}
                alt="Savannah World"
            />

            <div className={styles.titleContainer}>
                <Text type='h1' size="xxl" className={styles.title}>
                    <span className={styles.text}>Питомник </span> SAVANNAH WORLD
                </Text>
            </div>

            <Button
                className={styles.buttonHeader}
            >
                в каталог {arrowIcon()}
            </Button>
        </header>
    )
}