import { AdminPanelPage } from "../../../../pages/AdminPanelPage/AdminPanelPage";
import { CatalogPage } from "../../../../pages/CatalogPage/CatalogPage";
import { FAQPage } from "../../../../pages/FAQPage/FAQPage";
import { MainPage } from "../../../../pages/MainPage/MainPage";
import { PetsPage } from "../../../../pages/PetsPage/PetsPage";
import { 
    getRouteAdminPanel, 
    getRouteCatalog, 
    getRouteFAQ, 
    getRouteMain, 
    getRoutePets 
} from "./helpers";

export const routeConfig = {
    main: {
        path: getRouteMain(),
        element: <MainPage />,
    },
    catalog: {
        path: getRouteCatalog(),
        element: <CatalogPage />,
    },
    pets: {
        path: getRoutePets(),
        element: <PetsPage />,
    },
    faq: {
        path: getRouteFAQ(),
        element: <FAQPage />,
    },
    admin_panel: {
        path: getRouteAdminPanel(),
        element: <AdminPanelPage />,
        authOnly: true,
    }
};
