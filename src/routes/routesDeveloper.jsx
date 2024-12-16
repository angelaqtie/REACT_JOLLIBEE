import Advertisement from "@/components/pages/backend/advertisement/Advertisement";
import Categories from "@/components/pages/backend/categories/Categories";
import Dashboard from "@/components/pages/backend/dashboard/Dashboard";
import Food from "@/components/pages/backend/food/Food";
import Role from "@/components/pages/backend/settings/role/Role";
import Settings from "@/components/pages/backend/settings/Settings";

export const routeDeveloper = [
  {
    route: `/developer/dashboard`,
    element: <Dashboard />,
  },
  {
    route: `/developer/advertisement`,
    element: <Advertisement />,
  },
  {
    route: `/developer/categories`,
    element: <Categories />,
  },
  {
    route: `/developer/food`,
    element: <Food />,
  },
  {
    route: `/developer/settings`,
    element: <Settings />,
  },
  {
    route: `/developer/settings/role`,
    element: <Role />,
  },
  {
    route: `/developer/settings/developer`,
    element: <Settings />,
  },
  {
    route: `/developer/settings/developer`,
    element: <Settings />,
  },
];
