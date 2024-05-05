import { Navbar } from "../../feature/Navbar/Navbar"
import desktopPicture from "../../shared/assets/photo/header_cat.png"
import { arrowIcon } from "../../shared/assets/svg/arrowIcon"
import { Button } from "../../shared/ui/Button/Button"
import styles from "./styles.module.scss"

export const Header = () => {
    return (
        <section className={styles.header}>
            <Navbar />
            <img
                className={styles.picture}
                src={desktopPicture}
                alt="Savannah World"
            />
            <Button className={styles.buttonHeader}>
                в каталог {arrowIcon()}
            </Button>
        </section>
    )
}