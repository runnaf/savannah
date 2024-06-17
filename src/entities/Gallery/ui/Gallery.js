import styles from "./Gallery.module.scss";
import { Stack } from "../../../shared/ui/Stack/Stack";
import kitten1 from '../../../shared/assets/photo/gallery1.jpeg';
import kitten2 from '../../../shared/assets/photo/gallery2.jpeg';
import kitten3 from '../../../shared/assets/photo/gallery1.jpeg';
import kitten4 from '../../../shared/assets/photo/gallery2.jpeg';
import { imageData } from '../lib/data';


export const Gallery = () =>{
    return(

        <Stack
        className={styles.galleryContainer}
        gap='32'
        >
            <Stack
            alignItems = "alignCenter"
            justifyContent = 'justifyCenter'
            gap='32'>     
            {imageData.map(({src, index}) => (
                <img key={index} className={styles.photo} src={src}/>
                ))}
            </Stack>
       
            <Stack
            alignItems = "alignCenter"
            justifyContent = 'justifyCenter'
            gap='32'>     
            {imageData.map(({src, index}) => (
                <img key={index} className={styles.photo} src={src}/>
                ))}
            </Stack>

            <Stack
            alignItems = "alignCenter"
            justifyContent = 'justifyCenter'
            gap='32'>     
            {imageData.map(({src, index}) => (
                <img key={index} className={styles.photo} src={src}/>
                ))}
            </Stack>

        </Stack>

    )
}