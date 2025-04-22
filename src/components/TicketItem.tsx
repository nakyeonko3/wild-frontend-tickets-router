import Link from "next/link";
import { Ticket } from "../types";

export default function TicketItem({ ticket }: { ticket: Ticket }) {
  // const updateTicketStatus = useUpdateTicketStatus();

  // const handleClick = () => {
  //   updateTicketStatus({
  //     id: ticket.id,
  //     status: ticket.status === 'open' ? 'closed' : 'open',
  //   });
  // };

  return (
    <li>
      <Link href={`/tickets/${ticket.id}`} className="ticket">
        <div className="title">{ticket.title}</div>
      </Link>
      <div className="status">
        Status:
        <span>{ticket.status === "open" ? "Open" : "Closed"}</span>
      </div>
      <div className="comments">
        Comments:
        <span>{ticket.comments.length}</span>
      </div>
    </li>
  );
}
