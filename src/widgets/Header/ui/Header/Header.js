import { useLocation } from 'react-router-dom';

import { HeaderMain } from '../HeaderMain/HeaderMain';
import { HeaderSecondary } from '../HeaderSecondary/HeaderSecondary';

export const Header = () => {
    const location = useLocation();

    return (
        <>
            {
                location.pathname === '/'
                    ? <HeaderMain />
                    : <HeaderSecondary />
            }
        </>
    )
}