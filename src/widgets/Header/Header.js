import { useLocation } from 'react-router-dom';
import { HeaderMain } from './ui/headerMain/HeaderMain';
import { HeaderSecondary } from './ui/headerSecondary/HeaderSecondary';

export const Header = () => {
    let location = useLocation();

    return (
        <>
            {
                location.pathname === '/' ? <HeaderMain /> : <HeaderSecondary />
            }
        </>
    )
}