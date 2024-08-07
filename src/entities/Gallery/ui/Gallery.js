import styles from "./Gallery.module.scss";
import { Stack } from "../../../shared/ui/Stack/Stack";
import { imageData } from '../lib/data';
import { Text } from "../../../shared/ui/Text/Text";
import { arrowIcon } from '../../../shared/assets/svg/arrowIcon';
import { Link } from "react-router-dom";
import { HeaderSection } from '../../../shared/ui/HeaderSection/HeaderSection';




export const Gallery = () => {
    return (
        <>
            <Stack
                justifyContent='justifyBetween'
                alignItems = 'alignEnd'
                gap = '16'
                className={styles.section}>
                <HeaderSection section="Галерея">
                    <Text type="h2" size='xl' className={styles.title}>
                        Больше  <span>о нас и жизни </span>наших питомцев
                    </Text>
                </HeaderSection>
                    <Link to='https://www.instagram.com/savannah_lana_photo/' target="_blank" className={styles.gallery__btn}>
                            @savannah_lana_photo {arrowIcon()}
                    </Link>       
            </Stack>
        <Stack
            className={styles.galleryContainer}                  
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