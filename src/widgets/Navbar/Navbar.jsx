import { NavLink } from "react-router-dom";
import Logo from '../../shared/assets/photo/Logo.png';
import './Navbar.scss'

export const Navbar = () => {
    return (
        <nav className="navbar">
            <NavLink
                className={({ isActive }) =>
                    `${isActive ? 'opened-page' : 'default'}`
                }
                to={'/'}
            >
                ГЛАВНАЯ
            </NavLink>

            <NavLink
                className={({ isActive }) =>
                    `${isActive ? 'opened-page' : 'default'}`
                }
                to={'/catalog'}
            >
                КАТАЛОГ
            </NavLink>

            <img src={Logo} alt="savannah world" />

            <NavLink
                className={({ isActive }) =>
                    `${isActive ? 'opened-page' : 'default'}`
                }
                to={'/pets'}
            >
                ПИТОМЦЫ
            </NavLink>

            <NavLink
                className={({ isActive }) =>
                    `${isActive ? 'opened-page' : 'default'}`
                }
                to={'/fag'}
            >
                ВОПРОСЫ
            </NavLink>
        </nav>
    )
}