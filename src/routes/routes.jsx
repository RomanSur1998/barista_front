import AuthForm from "../components/AuthForm/AuthForm";
import CodeForm from "../components/CodeForm/CodeForm";
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
  {
    link: "/orders",
    element: <OrdersPage />,
    id: 3,
  },
  {
    link: "/menu",
    element: <MenuPage />,
    id: 4,
  },
  {
    link: "/profile",
    element: <ProfilePage />,
    id: 5,
  },
];
