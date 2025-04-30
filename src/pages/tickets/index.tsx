import TicketForm from "@/components/TicketForm";
import TicketList from "@/components/TicketList";
import { ticketsQueryOptions } from "@/pages/queryOptions";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { GetServerSideProps } from "next";
import { Suspense } from "react";

export default function TicketPage() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <TicketList />
      </Suspense>
      <TicketForm />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (context.req.url?.includes("/_next/data/")) {
    return {
      props: {},
    };
  }

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(ticketsQueryOptions());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
