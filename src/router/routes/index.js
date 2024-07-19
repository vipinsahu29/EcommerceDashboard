import MainLayout from "../../layout/MainLayout";
import { privateRoutes } from "./privateRoute";
import ProtectRoute from "./ProtectRout";

export const getRoutes = () => {
  privateRoutes.map((r)=>{
    r.element = <ProtectRoute route={r}>{r.element}</ProtectRoute>
  })
  return {
    path: "/",
    element: <MainLayout />,
    children: privateRoutes,
  };
};
