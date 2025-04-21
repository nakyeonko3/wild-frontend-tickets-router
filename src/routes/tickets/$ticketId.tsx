import { queryOptions } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { fetchTicket } from "../../api";
import { TICKETS_QUERY_KEY } from "../../contants";
import useTicket from "../../hooks/useTicket";

function ticketQueryOptions(ticketId: string) {
  return queryOptions({
    queryKey: [TICKETS_QUERY_KEY, ticketId],
    queryFn: () => fetchTicket({ ticketId }),
  });
}

export const Route = createFileRoute("/tickets/$ticketId")({
  loader: async ({ context: { queryClient }, params: { ticketId } }) => {
    queryClient.ensureQueryData(ticketQueryOptions(ticketId));
  },
  pendingComponent: () => <div>Loading...</div>,
  errorComponent: () => {
    return <div>Error!</div>;
  },
  component: TicketPage,
});

function TicketPage() {
  const { ticketId } = Route.useParams();

  const navigate = Route.useNavigate();

  const ticket = useTicket({ ticketId });

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
