import { NavLink } from "react-router-dom";
import styles from './Navbar.module.scss'
import { routeConfig } from "../../app/providers/router/config";

export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            {
                Object.values(routeConfig)
                    .filter(route => !route.authOnly)
                    .map(route =>
                        <NavLink
                            className={({ isActive }) =>
                                `${styles.link} ${isActive ? styles.opened_page : styles.default}`
                            }
                            to={route.path}
                        >
                            {route.navlink}
                        </NavLink>
                    )
            }
        </nav>
    )
}