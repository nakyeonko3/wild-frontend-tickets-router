import { ReactNode } from "react";

import { render } from "@testing-library/react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";

export function renderWithTestProviders(component: ReactNode) {
  const rootRoute = createRootRoute({
    component: () => <Outlet />,
  });

  const testRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: () => <>{component}</>,
  });

  const routeTree = rootRoute.addChildren([testRoute]);

  const router = createRouter({ routeTree });

  render(
    <QueryClientProvider client={new QueryClient()}>
      <RouterProvider router={router} />
    </QueryClientProvider>,
  );
}
