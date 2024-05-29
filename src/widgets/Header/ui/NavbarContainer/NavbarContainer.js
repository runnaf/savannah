import { isMobile } from 'react-device-detect';
import { useLocation } from 'react-router';

import { Navbar } from "@feature/Navbar/Navbar";
import { Button } from "@shared/ui/Button/Button";
import { Signin } from '@feature/Signin/Signin';

import { useModal } from '@shared/hooks/useModal';

import styles from "./NavbarContainer.module.scss";


export const NavbarContainer = () => {
    
    const location = useLocation();
    const [changeSigninModal, drawSiginModal] = useModal();

    return (
        <>
            {drawSiginModal(
                <Signin changeSigninModal={changeSigninModal} />
            )}

            <div className={`${styles.navbar} ${isMobile && `${styles.mobile}`} ${location.pathname === '/' && ` ${styles.headerMain}`}`}>
                <Navbar />
                <Button
                    onClick={changeSigninModal}
                    className={styles.buttonSigin} //TODO isMobile
                    variant="secondary"
                >
                    войти
                    {/* TODO */}
                    {/* {isMobile && 'ICON!!'} */}
                </Button>
            </div>
        </>

    )
}
