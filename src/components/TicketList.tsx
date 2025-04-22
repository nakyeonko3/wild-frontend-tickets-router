import { fetchTickets } from "@/api";
import TicketItem from "@/components/TicketItem";
import { Ticket } from "@/types";

export function TicketList({ tickets }: { tickets: Ticket[] }) {
  return (
    <ul className="ticket-list">
      {tickets.map((ticket) => (
        <TicketItem key={ticket.id} ticket={ticket} />
      ))}
    </ul>
  );
}

export default async function TicketListWrapper() {
  const { tickets } = await fetchTickets();
  return <TicketList tickets={tickets} />;
}
