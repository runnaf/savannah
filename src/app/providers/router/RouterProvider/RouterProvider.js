import { Suspense } from "react";
import { Route, Routes } from "react-router";
import { routeConfig } from "../config";

export const RouterProvider = () => (
  <Suspense fallback='...'>
    <Routes>
      {
        Object.values(routeConfig).map(({ path, element }) => (
          <Route 
            key={path}
            path={path}
            element={element}
          />
        ))
      }
    </Routes>
  </Suspense>
);

