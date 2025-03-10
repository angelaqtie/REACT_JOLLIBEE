import DeveloperProtectedRoute from "@/components/pages/backend/access/DeveloperProtectedRoute";
import Advertisement from "@/components/pages/backend/developer/advertisement/Advertisement";
import Categories from "@/components/pages/backend/developer/categories/Categories";
import Dashboard from "@/components/pages/backend/developer/dashboard/Dashboard";
import Food from "@/components/pages/backend/developer/food/Food";
import Developer from "@/components/pages/backend/settings/developer/Developer";
import Role from "@/components/pages/backend/developer/settings/role/Role";
import Settings from "@/components/pages/backend/developer/settings/Settings";
import User from "@/components/pages/backend/developer/settings/users/User";

export const routeDeveloper = [
  {
    route: `/developer/`,
    element: (
      <DeveloperProtectedRoute>
        <Dashboard />
      </DeveloperProtectedRoute>
    ),
  },
  {
    route: `/developer/dashboard`,
    element: (
      <DeveloperProtectedRoute>
        <Dashboard />
      </DeveloperProtectedRoute>
    ),
  },
  {
    route: `/developer/advertisement`,
    element: (
      <DeveloperProtectedRoute>
        <Advertisement />
      </DeveloperProtectedRoute>
    ),
  },
  {
    route: `/developer/categories`,
    element: (
      <DeveloperProtectedRoute>
        <Categories />
      </DeveloperProtectedRoute>
    ),
  },
  {
    route: `/developer/food`,
    element: (
      <DeveloperProtectedRoute>
        <Food />
      </DeveloperProtectedRoute>
    ),
  },
  {
    route: `/developer/settings`,
    element: (
      <DeveloperProtectedRoute>
        <Settings />
      </DeveloperProtectedRoute>
    ),
  },
  {
    route: `/developer/settings/role`,
    element: (
      <DeveloperProtectedRoute>
        <Role />
      </DeveloperProtectedRoute>
    ),
  },

  {
    route: `/developer/settings/developer`,
    element: (
      <DeveloperProtectedRoute>
        <Developer />
      </DeveloperProtectedRoute>
    ),
  },
  {
    route: `/developer/settings/developer`,
    element: <Settings />,
  },
  {
    route: `/developer/settings/users`,
    element: <User />,
  },
];
