import { AdminPanelPage } from "../../../../pages/AdminPanelPage/AdminPanelPage";
import { CatalogPage } from "../../../../pages/CatalogPage/CatalogPage";
import { MainPage } from "../../../../pages/MainPage/MainPage";
import { PetsPage } from "../../../../pages/PetsPage/PetsPage";
import { 
    getRouteAdminPanel, 
    getRouteCatalog, 
    getRouteMain, 
    getRoutePets 
} from "./helpers";

export const routeConfig = {
    main: {
        path: getRouteMain(),
        element: <MainPage />,
        navlink: 'главная',
    },
    catalog: {
        path: getRouteCatalog(),
        element: <CatalogPage />,
        navlink: 'каталог',
    },
    pets: {
        path: getRoutePets(),
        element: <PetsPage />,
        navlink: 'питомцы',
    },
    admin_panel: {
        path: getRouteAdminPanel(),
        element: <AdminPanelPage />,
        authOnly: true,
    }
};
