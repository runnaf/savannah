import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({
    isAuth: false,
    logout: () => {},
    login:(token) => {}
});

export const AuthProvider = (props) => {
    const { children } = props;

    const [isAuth, setIsAuth] = useState(!!Cookies.get('authToken'));

    useEffect(() => {
        const handleCookieChange = () => {
            const token = Cookies.get('authToken')
            setIsAuth(!!token)
        }
        window.addEventListener('storage', handleCookieChange);
        handleCookieChange();

        return() => {
            window.removeEventListener('storage', handleCookieChange)
        }
    }, []);

    const login = (token) => {
        Cookies.set('authToken', token, { express: 1 });
        setIsAuth(true);
    }

    const logout = () => {
        Cookies.remove('authToken');
        setIsAuth(false)
    }

    return(
        <AuthContext.Provider value={{ isAuth, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}