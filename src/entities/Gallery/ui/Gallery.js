import styles from "./Gallery.module.scss";
import { Stack } from "../../../shared/ui/Stack/Stack";
import { imageData } from '../lib/data';
import { Text } from "../../../shared/ui/Text/Text";
import { arrowIcon } from '../../../shared/assets/svg/arrowIcon';
import { Link } from "react-router-dom";




export const Gallery = () => {
    return (
        <>
            <Stack
                alignItems="alignCenter"
                justifyContent='justifyCenter'
                direction = 'column'
                gap = '32'
                className={styles.galleryText}>
                <Text size="l" className={styles.galleryTitle}>
                    Больше о нас и повседневной жизни наших саванн можно увидеть здесь
                </Text>
                <Link to='https://www.instagram.com/savannah_lana_photo/' target="_blank" className={styles.gallery__btn}>
                        @savannah_lana_photo {arrowIcon()}
                </Link>
            </Stack>
        <Stack
            className={styles.galleryContainer}
            gap='32'
        >
            <Stack
                className={styles.photoContainer}
                alignItems="alignCenter"
                justifyContent='justifyCenter'
                gap='32'
            >
                {imageData.map(({ src, index }) => (
                    <img key={index} className={styles.photo} src={src} alt="наши питомцы" />
                ))}
            </Stack>
        </Stack>

        </>
    )
}