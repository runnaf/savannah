import { NavLink } from "react-router-dom";

export const AppNavLink = (props) => {
    const { route, styles, isDefaultStyle = false } = props;

    return (
        <NavLink
            key={route.path}
            className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.opened_page : (isDefaultStyle ? styles.default : '')}`
            }
            to={route.path}
        >
            {route.navlink}
            {route.img}
        </NavLink>
    );
    
};
