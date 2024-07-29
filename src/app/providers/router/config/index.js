import { CatalogPage } from '../../../../pages/CatalogPage/ui/CatalogPage';
import { MainPage } from "../../../../pages/MainPage/MainPage";
import { PetsPage } from "../../../../pages/PetsPage/PetsPage";
import { catalogIcon, homeIcon, petsIcon } from "../../../../shared/assets/svg/navbarIcons";
import { 
    getRouteCatalog, 
    getRouteMain, 
    getRoutePets 
} from "./helpers";

export const routeConfig = {
    main: {
        path: getRouteMain(),
        element: <MainPage />,
        navlink: 'главная',
        img: homeIcon(),
    },
    catalog: {
        path: getRouteCatalog(),
        element: <CatalogPage />,
        navlink: 'котята',
        img: catalogIcon(),
    },
    pets: {
        path: getRoutePets(),
        element: <PetsPage />,
        navlink: 'питомцы',
        img: petsIcon(),
    },
    // admin_panel: {
    //     path: getRouteAdminPanel(),
    //     element: <AdminPanelPage />,
    //     authOnly: true,
    // }
};
