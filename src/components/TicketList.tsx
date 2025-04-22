import { fetchTickets } from "@/api";
import TicketItem from "@/components/TicketItem";

export default async function TicketList() {
  const { tickets } = await fetchTickets();
  return (
    <ul className="ticket-list">
      {tickets.map((ticket) => (
        <TicketItem key={ticket.id} ticket={ticket} />
      ))}
    </ul>
  );
}
