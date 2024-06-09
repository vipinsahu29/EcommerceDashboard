import { adminRoutes } from "./adminRoutes";
import { sellerRoutes } from "./sallerRoutes";


export const privateRoutes = [
    ...adminRoutes,
    ...sellerRoutes
]