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
            gap='16'
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
            <button
                className={styles.button}
                onClick={handleSocial}
            >
                <img src={closeIcon} alt='закрыть' />
                <span className='visually-hidden'>закрыть</span>
            </button>
        </Stack>
    );
}

export default SocialMedia;