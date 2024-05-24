import { useLocation } from 'react-router-dom';
import { HeaderMain } from '../HeaderMain/HeaderMain';
import { HeaderSecondary } from '../HeaderSecondary/HeaderSecondary';

export const Header = () => {
    let location = useLocation();

    return (
        <>
            {
                location.pathname === '/' ? <HeaderMain location={location} /> : <HeaderSecondary location={location} />
            }
        </>
    )
}