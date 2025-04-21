import { createFileRoute } from "@tanstack/react-router";

import TicketForm from "../../components/TicketForm";
import TicketList from "../../components/TicketList";
import { ticketsQueryOptions } from "../../queryOptions";

export const Route = createFileRoute("/tickets/")({
  component: TicketsPage,
  loader: async ({ context: { queryClient } }) => {
    await queryClient.ensureQueryData(ticketsQueryOptions());
  },
  pendingComponent: () => <div>Loading...</div>,
  errorComponent: () => {
    return <div>Error!</div>;
  },
});

function TicketsPage() {
  return (
    <>
      <TicketList />
      <TicketForm />
    </>
  );
}
