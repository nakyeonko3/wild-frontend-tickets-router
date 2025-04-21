import { createFileRoute } from "@tanstack/react-router";
import { fetchTicket } from "../../api";

export const Route = createFileRoute("/tickets/$ticketId")({
  loader: async ({ params }) => {
    const { ticketId } = params;
    const ticket = await fetchTicket({ ticketId });
    if (!ticket) {
      throw new Response("Not Found", { status: 404 });
    }
    return ticket;
  },
  pendingComponent: () => <div>Loading...</div>,
  errorComponent: () => {
    return <div>Ticket not found</div>;
  },
  component: TicketPage,
});

function TicketPage() {
  const ticket = Route.useLoaderData();
  const navigate = Route.useNavigate();

  const handleBackClick = () => {
    navigate({ to: "/tickets" });
  };

  return (
    <div className="ticket-detail">
      <div className="title">{ticket.title}</div>
      <div className="description">{ticket.description}</div>
      <div className="status">{ticket.status}</div>
      <div className="comment-count">Comments: {ticket.comments.length}</div>
      <button onClick={handleBackClick}>뒤로 가기</button>
    </div>
  );
}
