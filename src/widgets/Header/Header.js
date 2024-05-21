import { Navbar } from "../../feature/Navbar/Navbar";
import { Signin } from "../../feature/Signin/Signin";
import { arrowIcon } from "../../shared/assets/svg/arrowIcon";
import { useModal } from "../../shared/hooks/useModal";
import { Button } from "../../shared/ui/Button/Button";
import { Text } from "../../shared/ui/Text/Text";
import { Stack } from "../../shared/ui/Stack/Stack"
import picture_1920 from "../../shared/assets/photo/banner_1920x1080.jpg";
import picture_1920_2x from "../../shared/assets/photo/banner_1920x1080@2x.jpg";
import picture_1920webp from "../../shared/assets/photo/banner_1920x1080.webp";
import picture_1920_2xwebp from "../../shared/assets/photo/banner_1920x1080@2x.webp";
import picture_1440 from "../../shared/assets/photo/banner_1440x810.jpg";
import picture_1440_2x from "../../shared/assets/photo/banner_1440x810@2x.jpg";
import picture_1440webp from "../../shared/assets/photo/banner_1440x810.webp";
import picture_1440_2xwebp from "../../shared/assets/photo/banner_1440x810@2x.webp";
import picture_768 from "../../shared/assets/photo/banner_768x432.png";
import picture_768_2x from "../../shared/assets/photo/banner_768x432@2x.png";
import picture_480 from "../../shared/assets/photo/banner_480x270.jpg";
import picture_480_2x from "../../shared/assets/photo/banner_480x270@2x.jpg";
import picture_480webp from "../../shared/assets/photo/banner_480x270.webp";
import picture_480_2xwebp from "../../shared/assets/photo/banner_480x270@2x.webp";
import picture_320 from "../../shared/assets/photo/banner_320x180.jpg";
import picture_320_2x from "../../shared/assets/photo/banner_320x180@2x.jpg";
import picture_320webp from "../../shared/assets/photo/banner_320x180.webp";
import picture_320_2xwebp from "../../shared/assets/photo/banner_320x180@2x.webp";
import styles from "./styles.module.scss";

import {isMobile} from 'react-device-detect';

export const Header = () => {

    const [changeSigninModal, drawSiginModal] = useModal();

    return (
        <Stack justifyContent={'justifyCenter'}>
            <header className={styles.header}>
                <picture>
                    <source media="(min-width: 1920px)"
                        srcSet={`${picture_1920webp} 1x, ${picture_1920_2xwebp} 2x`} type="image/webp" />
                    <source media="(min-width: 1920px)"
                        srcSet={`${picture_1920} 1x, ${picture_1920_2x} 2x`}/>
                    <source media="(min-width: 1440px)"
                        srcSet={`${picture_1440webp} 1x, ${picture_1440_2xwebp} 2x`} type="image/webp" />
                    <source media="(min-width: 1440px)"
                        srcSet={`${picture_1440} 1x, ${picture_1440_2x} 2x`}/>
                    <source media="(min-width: 768px)"
                        srcSet={`${picture_768} 1x, ${picture_768_2x} 2x`}/>
                    <source media="(min-width: 480px)"
                        srcSet={`${picture_480webp} 1x, ${picture_480_2xwebp} 2x`} type="image/webp" />
                    <source media="(min-width: 480px)"
                        srcSet={`${picture_480} 1x, ${picture_480_2x} 2x`}/>
                    <source media="(min-width: 320px)"
                        srcSet={`${picture_320webp} 1x, ${picture_320_2xwebp} 2x`} type="image/webp"/>
                    <img className={styles.picture} src={picture_320}
                        srcSet={`${picture_320_2x} 2x`} alt="Savannah World" width="310" height="180" />
                </picture> 
                <div className={styles.headerContext}>
                    {drawSiginModal(
                        <Signin changeSigninModal={changeSigninModal} />
                    )}
                    <div className={`${styles.navbar} ${isMobile ? styles.mobile : ''} `}>
                        <Navbar />
                        <Button
                            onClick={changeSigninModal}
                            className={styles.buttonSigin}
                            variant="secondary"
                        >
                            <span>войти</span>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <rect width="40" height="40" fill="url(#pattern0_87_394)"/>
                                <defs>
                                    <pattern id="pattern0_87_394" patternContentUnits="objectBoundingBox" width="1" height="1">
                                        <use xlinkHref="#image0_87_394" transform="scale(0.0104167)"/>
                                    </pattern>
                                    <image id="image0_87_394" width="96" height="96" xlinkHref="data:image/png;base64,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"/>
                                </defs>
                            </svg>
                        </Button>                        
                    </div>
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