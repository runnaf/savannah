import { Suspense } from "react";
import { Route, Routes } from "react-router";
import MainPage from "../../../../pages/main/MainPage";

export const RouterProvider = () => (
    <Suspense>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
    </Suspense>
);

