import styles from './SocialMedia.module.scss';
import { telegramIcon, telephoneIcon, closeSocialIcon} from '../../shared/assets/svg/socialIcons';

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
            <Link to=''  className={styles.mediaIcon}>
                {telephoneIcon()}
            </Link>
            <Link to='' className={styles.mediaIcon}>
                {telegramIcon()}
            </Link>
            <button
                className={styles.button}
                onClick={handleSocial}
            >
                 {closeSocialIcon()}
                <span className='visually-hidden'>закрыть</span>
            </button>
        </Stack>
    );
}

export default SocialMedia;