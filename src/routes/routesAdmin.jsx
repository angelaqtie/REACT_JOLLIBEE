import Advertisement from "@/components/pages/backend/advertisement/Advertisement";
import Categories from "@/components/pages/backend/categories/Categories";
import Dashboard from "@/components/pages/backend/dashboard/Dashboard";
import Food from "@/components/pages/backend/food/Food";
import Role from "@/components/pages/backend/settings/role/Role";
import Settings from "@/components/pages/backend/settings/Settings";
import User from "@/components/pages/backend/settings/users/User";

export const routeAdmin = [
  {
    route: `/admin/dashboard`,
    element: <Dashboard />,
  },
  {
    route: `/admin/advertisement`,
    element: <Advertisement />,
  },
  {
    route: `/admin/categories`,
    element: <Categories />,
  },
  {
    route: `/admin/food`,
    element: <Food />,
  },
  {
    route: `/admin/settings`,
    element: <Settings />,
  },
  {
    route: `/admin/settings/role`,
    element: <Role />,
  },
  {
    route: `/admin/settings/developer`,
    element: <Role />,
  },
  {
    route: `/admin/settings/users`,
    element: <User />,
  },
];
