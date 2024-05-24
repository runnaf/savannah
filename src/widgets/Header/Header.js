import { useLocation } from 'react-router-dom';
import { HeaderMain } from './ui/HeaderMain/HeaderMain';
import { HeaderSecondary } from './ui/HeaderSecondary/HeaderSecondary';

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