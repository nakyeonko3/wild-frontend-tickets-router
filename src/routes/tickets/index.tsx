import { createFileRoute } from "@tanstack/react-router";

import { Suspense } from "react";

import { ErrorBoundary } from "react-error-boundary";

import TicketForm from "../../components/TicketForm";
import TicketList from "../../components/TicketList";

export const Route = createFileRoute("/tickets/")({
  component: TicketsPage,
});

function TicketsPage() {
  return (
    <>
      <ErrorBoundary fallback={<div>Error!</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <TicketList />
        </Suspense>
      </ErrorBoundary>
      <TicketForm />
    </>
  );
}
