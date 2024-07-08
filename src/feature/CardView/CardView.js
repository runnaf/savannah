import { Stack } from "../../shared/ui/Stack/Stack";
import styles from "./CardView.module.scss"

export const CardView = () => {
    return (
        <Stack justifyContent="justifyContent">
            <button className={styles.buttonForChoice} type="button"
                    // onClick={} 
            >
                <img className={styles.iconSmall} src={picAdjustm} alt="выбор картинок" />
                    <span className='visually-hidden'>Выбрать картинки</span>
            </button>

            <button
                className={styles.buttonForChoice}
                type="button"
                // onClick={}
            >
                <img className={styles.iconLarge} src={picAdjustMore} alt="выбор картинок" />
                    <span className='visually-hidden'>Выбрать картинки</span>
            </button>
        </Stack>
    )
}