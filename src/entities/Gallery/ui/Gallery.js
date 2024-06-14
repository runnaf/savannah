import styles from "./Gallery.module.scss";
import { Stack } from "../../../shared/ui/Stack/Stack";
import { imageData } from '../lib/data';


export const Gallery = () =>{
    return(

        <Stack
        className={styles.galleryContainer}
        gap='32'
        >
            <Stack
            className={styles.photoRow}
            alignItems = "alignCenter"
            justifyContent = 'justifyCenter'
            gap='32'>     
            {imageData.map(({src, index}) => (
                <img key={index} className={styles.photo} src={src} alt="наши питомцы"/>
                ))}
            </Stack>
       
            <Stack
            className={styles.photoRowHide}
            alignItems = "alignCenter"
            justifyContent = 'justifyCenter'
            gap='32'>     
            {imageData.map(({src, index}) => (
                <img key={index} className={styles.photo} src={src} alt="наши питомцы"/>
                ))}
            </Stack>

            <Stack
            className={styles.photoRowHide} //переделать на слайд
            alignItems = "alignCenter"
            justifyContent = 'justifyCenter'
            gap='32'>     
            {imageData.map(({src, index}) => (
                <img key={index} className={styles.photo} src={src} alt="наши питомцы"/>
                ))}
            </Stack>

        </Stack>

    )
}