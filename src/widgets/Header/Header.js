import { Navbar } from "../../feature/Navbar/Navbar"
import desktopPicture from "../../shared/assets/photo/header_cat.png"
import { arrowIcon } from "../../shared/assets/svg/arrowIcon"
import { Button } from "../../shared/ui/Button/Button"
import { Text } from "../../shared/ui/Text/Text"
import styles from "./styles.module.scss"

export const Header = () => {
    return (
        <section className={styles.header}>
            <div className={styles.navbar}>
                <Navbar />
            </div>
            <img
                className={styles.picture}
                src={desktopPicture}
                alt="Savannah World"
            />

            <div className={styles.titleContainer}>
                {/* <Text size="xxl" className={styles.text}>
                    Питомник
                </Text>
                <Text type='h1' size="xxl" className={styles.title}>
                    SAVANNAH WORLD
                </Text> */}

                <Text type='h1' size="xxl" className={styles.title}>
                    <span className={styles.text}>Питомник </span> SAVANNAH WORLD
                </Text>
            </div>

            <Button className={styles.buttonHeader}>
                в каталог {arrowIcon()}
            </Button>
        </section>
    )
}