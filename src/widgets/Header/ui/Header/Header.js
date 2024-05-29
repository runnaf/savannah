import { useLocation } from 'react-router-dom';
import { HeaderMain } from '../headerMain/HeaderMain';
import { HeaderSecondary } from '../headerSecondary/HeaderSecondary';

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