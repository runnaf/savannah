import {isMobile} from 'react-device-detect';

import { Navbar } from "../../../../feature/Navbar/Navbar";
import { Button } from "../../../../shared/ui/Button/Button";

import styles from "./styles.module.scss";


export const NavbarContainer = ({location, changeSigninModal}) => {

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