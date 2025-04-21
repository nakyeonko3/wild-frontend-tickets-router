import nock from "nock";

import { beforeEach, describe, it } from "vitest";

import { screen, waitFor } from "@testing-library/react";

import TicketList from "./TicketList";

import { API_BASE_URL, TicketListDto } from "../api";
import { renderWithTestProviders } from "../test-helpers";

describe("TicketList", () => {
  beforeEach(() => {
    const responseBody: TicketListDto = {
      tickets: [
        {
          id: "ticket-1",
          title: "Ticket #1",
          description: "Ticket Description",
          status: "open",
          comments: [
            {
              id: "comment-1",
              content: "Comment Content",
            },
          ],
        },
      ],
    };

    nock(API_BASE_URL).get("/tickets").reply(200, responseBody);
  });

  function renderTicketList() {
    renderWithTestProviders(<TicketList />);
  }

  it("renders tickets", async () => {
    renderTicketList();

    await waitFor(() => {
      screen.getByText(/Ticket #1/);
    });
  });
});
