import TicketStatus from "@/components/TicketStatus";
import Link from "next/link";
import { Ticket } from "../types";

export default function TicketItem({ ticket }: { ticket: Ticket }) {
  return (
    <li>
      <Link href={`/tickets/${ticket.id}`} className="ticket">
        <div className="title">{ticket.title}</div>
      </Link>
      <TicketStatus ticket={ticket} />
      <div className="comments">
        Comments:
        <span>{ticket.comments.length}</span>
      </div>
    </li>
  );
}
