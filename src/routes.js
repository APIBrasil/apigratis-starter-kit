import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdHome,
  MdLogout,
  MdQrCode2,
} from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/dashboard";
import Instancias from "views/admin/instancias";

// Auth Imports
import SignInCentered from "views/auth/signIn";

const routes = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "/dashboard",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "Instâncias",
    layout: "/admin",
    icon: <Icon as={MdQrCode2} width='20px' height='20px' color='inherit' />,
    path: "/data-tables",
    component: Instancias,
  },
  {
    name: "Fazer logout",
    layout: "/auth",
    path: "/sign-in",
    icon: <Icon as={MdLogout} width='20px' height='20px' color='inherit' />,
    component: SignInCentered,
  },
];

export default routes;
