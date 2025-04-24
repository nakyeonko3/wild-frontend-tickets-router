import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useNavigate, useParams } from "react-router";
import useTicket from "../hooks/useTicket";

function TicketDetailContent() {
  const { id } = useParams();

  const navigate = useNavigate();
  if (!id) {
    throw new Error("Ticket ID is missing");
  }
  const ticket = useTicket({ ticketId: id });
  if (!ticket) {
    throw new Error("Ticket not found");
  }
  return (
    <div className="ticket-detail">
      <div className="title">{ticket.title}</div>
      <div className="description">{ticket.description}</div>
      <div className="status">{ticket.status}</div>
      <div className="comment-count">Comments: {ticket.comments.length}</div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        뒤로 가기
      </button>
    </div>
  );
}

export default function TicketDetailPage() {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <Suspense fallback={<div>Loading...</div>}>
        <TicketDetailContent />
      </Suspense>
    </ErrorBoundary>
  );
}
