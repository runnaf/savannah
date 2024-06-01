import { useLocation } from 'react-router-dom';
import { HeaderMain } from '../headerMain/HeaderMain';
import { HeaderSecondary } from '../headerSecondary/HeaderSecondary';

export const Header = () => {
    const location = useLocation();

    return (
        <>
            {
                location.pathname === '/'
<<<<<<< HEAD
                    ? <HeaderMain/>
                    : <HeaderSecondary />
=======
                    ? <HeaderMain /> :
                    <HeaderSecondary />
>>>>>>> 7d4bd790d01e9b042b9e20b403c9d7552ae3ec83
            }
        </>
    )
}