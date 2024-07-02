import { routeConfig } from '../../../../app/providers/router/config/index';
import { Button } from '../../../../shared/ui/Button/Button';
import { Signin } from '../../../../feature/Signin/Signin';
import { AppNavLink } from '../AppNavLink/AppNavLink';
import { useModal } from '../../../../shared/hooks/useModal';
import { useAppRoutes } from '../../../../shared/hooks/useAppRoutes';
import styles from './NavbarDesktop.module.scss';
import { getStyle } from '../../../../shared/helper/getStyle';


export const NavbarDesktop = ({className}) => {
    const [changeSigninModal, drawSiginModal] = useModal();
    const routes = useAppRoutes({routeConfig});
    const additional = [
        className,
    ]

    return (
        <div className={styles.container}>
            {drawSiginModal(
                <Signin changeSigninModal={changeSigninModal} />
            )}

            <nav className={getStyle(styles.navbar, {}, additional)}>
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
        </div>
    );
};
