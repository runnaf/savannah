import { useEffect } from "react";
import { useLocation } from "react-router";

export const ScrollToTop = () => {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo({left: 0, top: 0, behavior: 'smooth'});
    }, [pathname])
}