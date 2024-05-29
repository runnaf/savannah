import { routeConfig } from '@/app/providers/router/config/index';
import { Signin } from '@/features/Signin';
import { signinIcon } from '@/shared/assets/svg/navbarIcons';
import { AppNavLink } from '../AppNavLink/AppNavLink';

import { useModal } from '@/shared/hooks/useModal';
import { useAppRoutes } from '@/shared/hooks/useAppRoutes';

import styles from './NavbarMobile.module.scss';

export const NavbarMobile = () => {
    const [changeSigninModal, drawSiginModal] = useModal();
    const routes = useAppRoutes(routeConfig, true);

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
                    onClick={changeSigninModal}
                >
                    войти
                    {signinIcon()}
                </button>
            </nav>
        </div>
    );
};
