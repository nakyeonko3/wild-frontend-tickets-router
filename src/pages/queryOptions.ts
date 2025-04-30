import { fetchTicket, fetchTickets } from "@/api";
import { TICKET_DETAIL_QUERY_KEY, TICKETS_QUERY_KEY } from "@/contants";
import { queryOptions } from "@tanstack/react-query";

export const ticketsQueryOptions = () =>
  queryOptions({
    queryKey: [TICKETS_QUERY_KEY],
    queryFn: fetchTickets,
  });

export const ticketQueryOptions = (ticketId: string) =>
  queryOptions({
    queryKey: [TICKET_DETAIL_QUERY_KEY],
    queryFn: () => fetchTicket({ ticketId }),
  });
