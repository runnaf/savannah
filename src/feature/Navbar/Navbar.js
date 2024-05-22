import { NavLink } from "react-router-dom";
import styles from './Navbar.module.scss'
import { routeConfig } from "../../app/providers/router/config";
import { useState } from "react";

export const Navbar = () => {
    const [catalog, setCatalog] = useState(false);

    return (
        <nav className={`${styles.navbar} ${catalog ? 'catalog' : ''}`}>
            {
                Object.values(routeConfig)
                    .filter(route => !route.authOnly)
                    .map(route =>
                        <NavLink
                            key={route.path}
                            className={({ isActive }) =>
                                `${styles.link} ${isActive ? styles.opened_page : styles.default}`
                            }
                            to={route.path}
                            onClick={()=>{
                                if (route.path === '/catalog') {
                                    console.log('hi')
                                    setCatalog(true)
                                } 
                                else {
                                    setCatalog (false)
                                }
                            }}
                        >
                            <span>{route.navlink}</span>
                            {route.img}
                        </NavLink>
                    )
            }
        </nav>
    )
}