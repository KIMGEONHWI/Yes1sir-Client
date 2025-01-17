import { createBrowserRouter } from "react-router-dom";
import Roots from "@/Roots";
import HomeLogin from "@/pages/HomeLogin/HomeLogin";
import HomeLogout from "@/pages/HomeLogout/HomeLogout";
import Login from "@/pages/Login/Login";
import Recommend from "@/pages/Recommend/Recommend";
import Age from "@/pages/Age/Age";
import Target from "@/pages/Target/Target";
import Test from "@/pages/Test/Test";
import Detail from "@/pages/Detail/Detail";
import OAuthCallback from "@/pages/OAuthCallBAck/OAuthCallBack";
export const router = createBrowserRouter([
  {
    path: "",
    element: <Roots />,
    children: [
      {
        path: "/",
        element: <HomeLogout />,
      },
      {
        path: "/HomeLogin",
        element: <HomeLogin />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Recommend",
        element: <Recommend />,
      },
      {
        path: "/Detail/:productId",
        element: <Detail />,
      },
      {
        path: "/Age",
        element: <Age />,
      },
      {
        path: "/Target",
        element: <Target />,
      },
      {
        path: "/Test",
        element: <Test />,
      },
      {
        path: "/oauth/callback",
        element: <OAuthCallback />, // OAuth 콜백 경로 추가
      },
    ],
  },
]);
