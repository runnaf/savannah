import { NavLink } from "react-router-dom";
import { ScrollToTop } from "../../../../hooks/scrollToTop";

export const AppNavLink = (props) => {
    const { route, styles, isDefaultStyle = false } = props;

    return (
        <NavLink
            key={route.path}
            className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.opened_page : (isDefaultStyle ? styles.default : '')}`
            }
            to={route.path}
            onClick={ScrollToTop()}
        >
            {route.navlink}
            {route.img}
        </NavLink>
    );

};
