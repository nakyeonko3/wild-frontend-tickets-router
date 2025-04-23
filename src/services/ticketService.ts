"use server";
import { createTicket, fetchTickets, updateTicketStatus } from "../api";

import { readCache, writeCache } from "@/cache";
import { Ticket } from "@/types";
import { TICKETS_QUERY_KEY } from "../contants";

export default async function getTickets() {
  const tickets = await readCache<{ tickets: Ticket[] }>(TICKETS_QUERY_KEY);
  if (tickets?.tickets) {
    return tickets.tickets;
  }
  const data = await fetchTickets();
  await writeCache(TICKETS_QUERY_KEY, data);
  return data.tickets;
}

export async function invalidateTicketsCache() {
  await writeCache(TICKETS_QUERY_KEY, null);
}

export async function createNewTicket({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  await createTicket({ title, description });
  await invalidateTicketsCache();
}

export async function updateTicket({
  id,
  status,
}: {
  id: string;
  status: "open" | "closed";
}) {
  await updateTicketStatus({ id, status });
  await invalidateTicketsCache();
}
