import { GetServerSideProps } from "next";

import { ticketQueryOptions } from "@/pages/queryOptions";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import useTicket from "../../hooks/useTicket";

export default function TicketPage({ ticketId }: { ticketId: string }) {
  const ticket = useTicket({ ticketId });

  if (!ticket) {
    return <div>Loading...</div>;
  }

  return (
    <div className="ticket-detail">
      <div className="title">{ticket.title}</div>
      <div className="description">{ticket.description}</div>
      <div className="status">{ticket.status}</div>
      <div className="comment-count">Comments: {ticket.comments.length}</div>
    </div>
  );
}

async function dehydratedState(ticketId: string) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(ticketQueryOptions(ticketId));
  return dehydrate(queryClient);
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const isInitialSSR = !context.req.url?.includes("/_next/data/");
  const ticketId = context.params?.ticketId?.toString() || "";

  return {
    props: {
      ticketId,
      dehydratedState: isInitialSSR && (await dehydratedState(ticketId)),
    },
  };
};
