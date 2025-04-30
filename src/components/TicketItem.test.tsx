import nock from "nock";

import { beforeEach, describe, it } from "vitest";

import { render, screen } from "@testing-library/react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import TicketItem from "./TicketItem";

import { API_BASE_URL } from "../api";

import { Ticket } from "../types";

const context = describe;

describe("TicketItem", () => {
  let requestTicketId = "";
  let requestBody: any = null;

  const ticket: Ticket = {
    id: "ticket-1",
    title: "TITLE",
    description: "DESCRIPTION",
    status: "open",
    comments: [{ id: "comment-1", content: "COMMENT" }],
  };

  beforeEach(() => {
    requestTicketId = "";
    requestBody = null;

    nock(API_BASE_URL)
      .patch(`/tickets/${ticket.id}`)
      .reply(200, (uri, body: any) => {
        const parts = uri.split("/");
        requestTicketId = parts[parts.length - 1];
        requestBody = body;
        return {
          ...ticket,
          status: body.status,
        };
      });
  });

  function renderTicketItem() {
    const queryClient = new QueryClient();

    render(
      <QueryClientProvider client={queryClient}>
        <TicketItem ticket={ticket} />
      </QueryClientProvider>
    );
  }

  it("renders title and status", () => {
    renderTicketItem();

    screen.getByText("TITLE");
    screen.getByText(/Open/);
  });
});
