import { useMemo } from "react";

export const useAppRoutes = (props) => {
    const {routeConfig, includeIcons = false} = props;

    return useMemo(() => {
        return Object.values(routeConfig)
            .filter(route => !route.adminOnly)
            .map(route => ({
                path: route.path,
                navlink: route.navlink,
                img: includeIcons ? route.img : null
            }));
    }, [routeConfig, includeIcons]);
};
