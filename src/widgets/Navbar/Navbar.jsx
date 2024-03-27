import { NavLink } from "react-router-dom";
import Logo from '../../shared/assets/photo/Logo.png';
import styles from './Navbar.module.scss'
import { 
    getRouteCatalog, 
    getRouteFAQ, 
    getRouteMain, 
    getRoutePets 
} from "../../app/providers/router/config/helpers";

export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <NavLink
                className={({ isActive }) =>
                    `${isActive ? styles.opened_page : styles.default}`
                }
                to={getRouteMain()}
            >
                ГЛАВНАЯ
            </NavLink>

            <NavLink
                className={({ isActive }) =>
                    `${isActive ? styles.opened_page : styles.default}`
                }
                to={getRouteCatalog()}
            >
                КАТАЛОГ
            </NavLink>

            <img src={Logo} alt="savannah world" />

            <NavLink
                className={({ isActive }) =>
                    `${isActive ? styles.opened_page : styles.default}`
                }
                to={getRoutePets()}
            >
                ПИТОМЦЫ
            </NavLink>

            <NavLink
                className={({ isActive }) =>
                    `${isActive ? styles.opened_page : styles.default}`
                }
                to={getRouteFAQ()}
            >
                ВОПРОСЫ
            </NavLink>
        </nav>
    )
}