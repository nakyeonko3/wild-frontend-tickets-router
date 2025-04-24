import { useSuspenseQuery } from "@tanstack/react-query";

import { fetchTicket } from "../api";

export default function useTicket({ ticketId }: { ticketId: string }) {
  const { data, error, isFetching } = useSuspenseQuery({
    queryKey: ["ticket-detail", ticketId],
    queryFn: () => fetchTicket({ ticketId }),
  });

  if (error && !isFetching) {
    throw error;
  }

  return data;
}
