import picture_1920 from "../../../../shared/assets/photo/banner_1920x1080.jpg";
import picture_1920_2x from "../../../../shared/assets/photo/banner_1920x1080@2x.jpg";
import picture_1920webp from "../../../../shared/assets/photo/banner_1920x1080.webp";
import picture_1920_2xwebp from "../../../../shared/assets/photo/banner_1920x1080@2x.webp";
import picture_320 from "../../../../shared/assets/photo/banner_320x180.jpg";
import picture_320_2x from "../../../../shared/assets/photo/banner_320x180@2x.jpg";
import picture_320webp from "../../../../shared/assets/photo/banner_320x180.webp";
import picture_320_2xwebp from "../../../../shared/assets/photo/banner_320x180@2x.webp";
import styles from "./HeaderPictureMain.module.scss";

export const HeaderPictureMain = () => {
    return (
        <picture>
            <source media="(min-width: 821px)"
                srcSet={`${picture_1920webp} 1x, ${picture_1920_2xwebp} 2x`} type="image/webp" />
            <source media="(min-width: 821px)"
                srcSet={`${picture_1920} 1x, ${picture_1920_2x} 2x`} />
            <source media="(min-width: 320px)"
                srcSet={`${picture_320webp} 1x, ${picture_320_2xwebp} 2x`} type="image/webp" />
            <img className={styles.picture} srcSet={`${picture_320} 1x, ${picture_320_2x} 2x`} alt="Savannah World" width="310" height="180"/>
        </picture>
    )
}