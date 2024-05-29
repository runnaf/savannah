import { routeConfig } from '@/app/providers/router/config/routerConfig';
import { Button } from '@/shared/ui/Button/Button';
import { Signin } from '@/features/Signin';
import { AppNavLink } from '../AppNavLink/AppNavLink';

import { useModal } from '@/shared/hooks/useModal';
import { useAppRoutes } from '@/shared/hooks/useAppRoutes';

import styles from './NavbarDesktop.module.scss';


export const NavbarDesktop = () => {
    const [changeSigninModal, drawSiginModal] = useModal();
    const routes = useAppRoutes(routeConfig);

    return (
        <>
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
                        />
                    ))
                }

                <Button
                    onClick={changeSigninModal}
                    className={styles.buttonSigin}
                    variant="secondary"
                >
                    войти
                </Button>
            </nav>
        </>
    );
};