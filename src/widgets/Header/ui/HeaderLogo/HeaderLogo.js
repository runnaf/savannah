import { Link } from "react-router-dom";
import styles from "./HeaderLogo.module.scss"

import { getRouteMain } from "../../../../app/providers/router/config/helpers";

export const HeaderLogo = () => {
    return (
        <Link to={getRouteMain()} className={styles.logo}>
            SAVANNAH
            WORLD
        </Link>
    )
}
