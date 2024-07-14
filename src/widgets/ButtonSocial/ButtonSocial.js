import { useShownOnScroll } from "../../shared/hooks/useShownOnScroll";
import styles from './ButtonSocial.module.scss';
import { socialIcon } from '../../shared/assets/svg/socialIcons';
import SocialMedia from "../../feature/SocialMedia/SocialMedia";
import { useState } from "react";


const ButtonSocial = () => {

    const { isShow } = useShownOnScroll();
    const [openMedia, closeMedia] = useState(false);

    const handleSocial = () => closeMedia(!openMedia);

    return (
        <div>
            {isShow &&
                <div>
                    {
                        !openMedia &&
                        <button
                            className={styles.buttonSocial}
                            type="button"
                            onClick={handleSocial}
                        >
                                {socialIcon()}
                            <span className='visually-hidden'>Социальные сети</span>
                        </button>
                    }
                    {
                        openMedia &&
                        <SocialMedia handleSocial={handleSocial} />
                    }
                </div>
            }
        </div>
    );
}

export default ButtonSocial;