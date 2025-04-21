import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Header from "../components/Header";

const queryClient = new QueryClient();

export const Route = createRootRoute({
  component: Layout,
  notFoundComponent: () => <div>Page not found!</div>,
});

function Layout() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
      <TanStackRouterDevtools />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
