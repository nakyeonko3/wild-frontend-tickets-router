import { useSuspenseQuery } from "@tanstack/react-query";

import { fetchTickets } from "../api";

import { TICKETS_QUERY_KEY } from "../contants";

export default function useTickets() {
  const { data, error, isFetching } = useSuspenseQuery({
    queryKey: [TICKETS_QUERY_KEY],
    queryFn: fetchTickets,
  });

  if (error && !isFetching) {
    throw error;
  }

  const tickets = data?.tickets || [];

  return { tickets };
}
