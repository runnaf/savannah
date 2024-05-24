import {isMobile} from 'react-device-detect';

import { useModal } from "../../../../shared/hooks/useModal";

import { Navbar } from "../../../../feature/Navbar/Navbar";
import { Button } from "../../../../shared/ui/Button/Button";

import styles from "./styles.module.scss";
import { useLocation } from 'react-router';


export const NavbarContainer = () => {
    let location = useLocation();

    const [changeSigninModal] = useModal();

    return (
        <div className={`${styles.navbar}${isMobile ? ` ${styles.mobile}` : ''}${ location.pathname === '/' ? ` ${styles.headerMain}` : ''}`}>
            <Navbar />
            <Button
                onClick={changeSigninModal}
                className={styles.buttonSigin}
                variant="secondary"
            >
            войти
            </Button>                        
        </div>
    )
}