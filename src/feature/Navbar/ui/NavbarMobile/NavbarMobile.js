import { routeConfig } from '../../../../app/providers/router/config/index';
import { Signin } from '../../../Signin/Signin';
import { signinIcon } from '../../../../shared/assets/svg/navbarIcons';
import { AppNavLink } from '../AppNavLink/AppNavLink';
import { useModal } from '../../../../shared/hooks/useModal';
import { useAppRoutes } from '../../../../shared/hooks/useAppRoutes';
import styles from './NavbarMobile.module.scss';
import { useAuth } from '../../../../shared/hooks/useAuth';

export const NavbarMobile = () => {
    const [changeSigninModal, drawSiginModal] = useModal();
    const includeIcons = true;
    const routes = useAppRoutes({ routeConfig, includeIcons });
    const { isAuth, logout } = useAuth();

    const handleClick = () => {
        if (isAuth) logout();
        else changeSigninModal();
    }

    return (
        <div className={styles.container}>
            {drawSiginModal(
                <Signin changeSigninModal={changeSigninModal} />
            )}

            <nav className={styles.navbar}>
                {
                    routes.map(route => (
                        <AppNavLink
                            key={route.path}
                            route={route}
                            styles={styles}
                            isDefaultStyle={true}
                        />
                    ))
                }
                <button
                    className={styles.button}
                    onClick={handleClick}
                >
                    {isAuth ? 'выйти' : 'войти'}
                    {signinIcon()}
                </button>
            </nav>
        </div>
    );
};
