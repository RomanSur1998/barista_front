import AuthForm from "../components/AuthForm/AuthForm";
import CodeForm from "../components/CodeForm/CodeForm";
import { SelectFilial } from "../components/SelectFilial/SelectFilial";
import MenuPage from "../pages/MenuPage/MenuPage";
import OrdersPage from "../pages/OrdersPage/OrdersPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";

export const BASE_ROUT_COLLECTION = [
  {
    link: "/",
    element: <AuthForm />,
    id: 1,
  },
  {
    link: "/code",
    element: <CodeForm />,
    id: 2,
  },
];

export const PRIVATE_ROUT_COLLECTION = [
  {
    link: "/orders",
    element: <OrdersPage />,
    id: 1,
  },
  {
    link: "/menu",
    element: <MenuPage />,
    id: 2,
  },
  {
    link: "/profile",
    element: <ProfilePage />,
    id: 3,
  },
  {
    link: "/filial",
    element: <SelectFilial />,
    id: 4,
  },
];
