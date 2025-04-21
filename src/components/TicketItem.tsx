import { Link } from "@tanstack/react-router";
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
      <Link
        to="/tickets/$ticketId"
        params={{ ticketId: ticket.id }}
        preload="intent"
      >
        <div className="title">{ticket.title}</div>
      </Link>
      <div className="status">
        Status:
        <button
          onClick={handleClick}
          style={{
            cursor: "pointer",
            border: "solid 1px #000",
            borderRadius: "4px",
          }}
        >
          {ticket.status === "open" ? "Open" : "Closed"}
        </button>
      </div>
      <div className="comments">
        Comments:
        <span>{ticket.comments.length}</span>
      </div>
    </li>
  );
}
