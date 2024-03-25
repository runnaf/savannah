import { AdminPanelPage } from "../../../../pages/AdminPanelPage/AdminPanelPage";
import { CatalogPage } from "../../../../pages/CatalogPage/CatalogPage";
import { FAQPage } from "../../../../pages/FAQPage/FAQPage";
import { MainPage } from "../../../../pages/MainPage/MainPage";
import { PetsPage } from "../../../../pages/PetsPage/PetsPage";

export const routeConfig = {
    main: {
        path: '/',
        element: <MainPage />,
    },
    catalog: {
        path: '/catalog',
        element: <CatalogPage />,
    },
    pets: {
        path: '/pets',
        element: <PetsPage />,
    },
    faq: {
        path: '/faq',
        element: <FAQPage />,
    },
    admin_panel: {
        path: '/admin-panel',
        element: <AdminPanelPage />,
        authOnly: true,
    }
};
