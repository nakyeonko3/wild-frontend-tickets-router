import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/tickets/$ticketId")({
  component: RouteComponent,
  loader: async ({ params }) => {
    const { ticketId } = params;
    if (!ticketId) {
      throw new Error("Ticket ID is required");
    }
    return ticketId;
  },
});

function RouteComponent() {
  const { ticketId } = Route.useParams();
  return <div>Hello "{ticketId}"!</div>;
}
