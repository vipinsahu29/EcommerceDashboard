import MainLayout from "../../layout/MainLayout";
import { privateRoutes } from "./privateRoute";

export const getRoutes = () => {
  return {
    path: "/",
    element: <MainLayout />,
    children: privateRoutes,
  };
};
