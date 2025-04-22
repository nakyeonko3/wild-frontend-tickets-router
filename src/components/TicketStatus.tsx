"use client";

import useUpdateTicketStatus from "@/hooks/useUpdateTicketStatus";
import { Ticket } from "@/types";

export default function TicketStatus({ ticket }: { ticket: Ticket }) {
  const { currentStatus, handleClick } = useUpdateTicketStatus({ ticket });
  return (
    <button type="button" className="status" onClick={handleClick}>
      {currentStatus === "open" ? "Open" : "Closed"}
    </button>
  );
}
