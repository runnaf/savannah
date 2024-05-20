import styles from './SocialMedia.module.scss';
import telegramIcon from '../../shared/assets/photo/telegram.png';
import whatsappIcon from '../../shared/assets/photo/whatsapp.png';
import closeIcon from '../../shared/assets/photo/close.png';
import { Stack } from '../../shared/ui/Stack/Stack';
import { Link } from 'react-router-dom';

const SocialMedia = ({ handleSocial }) => {
    return (
        <Stack
            direction='column'
            gap='32'
            justifyContent='justifyCenter'
            alignItems='alignCenter'
            className={styles.media}
        >
            <Link to=''>
                <img src={whatsappIcon} alt='ватсап' />
            </Link>
            <Link to=''>
                <img src={telegramIcon} alt='телеграм' />
            </Link>
            <img 
                src={closeIcon}
                onClick={handleSocial}
                alt='закрыть'
            />        
        </Stack>
      );
}
 
export default SocialMedia;