import TicketForm from "@/components/TicketForm";
import TicketList from "@/components/TicketList";
import { Suspense } from "react";

export const metadata = {
  title: "Ticket List",
};

export default function TicketsPage() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <TicketList />
      </Suspense>
      <TicketForm />
    </>
  );
}
