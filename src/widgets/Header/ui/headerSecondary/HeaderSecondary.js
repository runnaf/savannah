import { Signin } from "../../../../feature/Signin/Signin";
import { useModal } from "../../../../shared/hooks/useModal";
import { HeaderPictureSecondary } from "../HeaderPictureSecondary/HeaderPictureSecondary";
import { NavbarContainer } from "../NavbarContainer/NavbarContainer";

import styles from "./styles.module.scss";

export const HeaderSecondary = ({location}) => {

    const [changeSigninModal, drawSiginModal] = useModal();

    return (
            <header className={styles.header}>
                <HeaderPictureSecondary />
                <div className={styles.headerContext}>
                    {drawSiginModal(
                        <Signin changeSigninModal={changeSigninModal} />
                    )}
                    <NavbarContainer location={location} changeSigninModal={changeSigninModal}/>
                </div>               
            </header>       
    )
}