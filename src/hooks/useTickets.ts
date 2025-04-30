import { useSuspenseQuery } from "@tanstack/react-query";

import { ticketsQueryOptions } from "@/pages/queryOptions";

export default function useTickets() {
  const { data, error, isFetching } = useSuspenseQuery(ticketsQueryOptions());

  if (error && !isFetching) {
    throw error;
  }

  console.log("🪝 useTickets", data);

  const tickets = data?.tickets || [];

  return { tickets };
}
