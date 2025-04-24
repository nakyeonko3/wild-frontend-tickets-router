import { Link } from "react-router";
import useUpdateTicketStatus from "../hooks/useUpdateTicketStatus";

import { Ticket } from "../types";

export default function TicketItem({ ticket }: { ticket: Ticket }) {
  const updateTicketStatus = useUpdateTicketStatus();

  const handleClick = () => {
    updateTicketStatus({
      id: ticket.id,
      status: ticket.status === "open" ? "closed" : "open",
    });
  };

  return (
    <li>
      <div className="title">
        <Link to={`/tickets/${ticket.id}`}> {ticket.title}</Link>
      </div>
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
