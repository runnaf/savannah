import { useShownOnScroll } from "../../shared/hooks/useShownOnScroll";
import styles from './ButtonSocial.module.scss';
import chatIcon from '../../shared/assets/photo/chat-icon.png';
import SocialMedia from "../../feature/SocialMedia/SocialMedia";
import { useState } from "react";


const ButtonSocial = () => {

    const { isShow } = useShownOnScroll();
    const [openMedia, closeMedia] = useState(false);

    const handleSocial = () => closeMedia(!openMedia);

    return (
        <div>            
            { isShow &&
            <div>
                {
                    !openMedia && 
                        <button
                            className={styles.buttonSocial}
                            type="button"
                            onClick={handleSocial}
                        >
                                <img className={styles.iconChat} src={chatIcon} alt="социальные сети"/>
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