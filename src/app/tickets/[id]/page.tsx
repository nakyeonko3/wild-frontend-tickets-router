import { fetchTicket } from "@/api";
import { BackButton } from "@/components/backButton";
import TicketStatus from "@/components/TicketStatus";

interface TicketDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: TicketDetailPageProps) {
  const { id } = await params;

  return {
    title: `Ticket #${id}`,
  };
}

export default async function Page({ params }: TicketDetailPageProps) {
  const { id: ticketId } = await params;

  const ticket = await fetchTicket({ ticketId });

  return (
    <div className="ticket-detail">
      <div className="title">{ticket.title}</div>
      <div className="description">{ticket.description}</div>
      <TicketStatus ticket={ticket} />
      <div className="comment-count">Comments: {ticket.comments.length}</div>
      <BackButton />
    </div>
  );
}
