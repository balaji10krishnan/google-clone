import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandPage from "../pages/LandPage/LandPage";
import SearchPage from "../pages/SearchPage/SearchPage";

const MainRoute = () => {
  const router = createBrowserRouter([
    { index: true, element: <LandPage /> },
    {
      path: "/search",
      element: <SearchPage />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default MainRoute;
