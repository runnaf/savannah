import { Signin } from "../../feature/Signin/Signin";
import { useModal } from "../../shared/hooks/useModal";
import picture from "../../shared/assets/photo/banner_catalog.png";
import picture2x from "../../shared/assets/photo/banner_catalog@2x.png";
import styles from "./styles.module.scss";

import { NavbarContainer } from "../Header/ui/NavbarContainer";

export const HeaderCatalog = () => {

    const [changeSigninModal, drawSiginModal] = useModal();

    return (
            <header className={styles.header}>
                <picture>
                    <img className={styles.picture} src={picture}
                        srcSet={`${picture2x} 2x`} alt="Savannah World" width="350" height="201" />
                </picture> 
                <div className={styles.headerContext}>
                    {drawSiginModal(
                        <Signin changeSigninModal={changeSigninModal} />
                    )}
                    <NavbarContainer />
                </div>               
            </header>       
    )
}