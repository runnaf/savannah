import { NavLink } from "react-router-dom";
import Logo from '../../shared/assets/photo/Logo.png';
import './Navbar.scss'
import { 
    getRouteCatalog, 
    getRouteFAQ, 
    getRouteMain, 
    getRoutePets 
} from "../../app/providers/router/config/helpers";

export const Navbar = () => {
    return (
        <nav className="navbar">
            <NavLink
                className={({ isActive }) =>
                    `${isActive ? 'opened-page' : 'default'}`
                }
                to={getRouteMain()}
            >
                ГЛАВНАЯ
            </NavLink>

            <NavLink
                className={({ isActive }) =>
                    `${isActive ? 'opened-page' : 'default'}`
                }
                to={getRouteCatalog()}
            >
                КАТАЛОГ
            </NavLink>

            <img src={Logo} alt="savannah world" />

            <NavLink
                className={({ isActive }) =>
                    `${isActive ? 'opened-page' : 'default'}`
                }
                to={getRoutePets()}
            >
                ПИТОМЦЫ
            </NavLink>

            <NavLink
                className={({ isActive }) =>
                    `${isActive ? 'opened-page' : 'default'}`
                }
                to={getRouteFAQ()}
            >
                ВОПРОСЫ
            </NavLink>
        </nav>
    )
}