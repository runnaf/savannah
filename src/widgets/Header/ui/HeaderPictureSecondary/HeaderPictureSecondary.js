import { Link } from "react-router-dom";
import picture from "../../../../shared/assets/photo/banner_catalog.png";
import picture2x from "../../../../shared/assets/photo/banner_catalog@2x.png";

import { getRouteMain } from "../../../../app/providers/router/config/helpers";

import styles from "./HeaderPictureSecondary.module.scss";

export const HeaderPictureSecondary = () => {
    return (
        <Link to={getRouteMain()}>
            <img className={styles.picture} src={picture}
                srcSet={`${picture2x} 2x`} alt="Savannah World" width="350" height="201" />
        </Link>
    )
}