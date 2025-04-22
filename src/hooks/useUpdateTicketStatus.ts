import { updateTicketStatus } from "@/api";
import { Ticket } from "@/types";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function useUpdateTicketStatus({ ticket }: { ticket: Ticket }) {
  const [currentStatus, setCurrentStatus] = useState(ticket.status);
  const router = useRouter();

  const handleClick = async () => {
    const previousStatus = currentStatus;
    const newStatus = previousStatus === "open" ? "closed" : "open";
    setCurrentStatus(newStatus);
    try {
      await updateTicketStatus({
        id: ticket.id,
        status: newStatus,
      });
      router.refresh();
    } catch (error) {
      setCurrentStatus(previousStatus);
      console.error("Failed to update ticket status:", error);
      alert("상태 업데이트에 실패했습니다. 다시 시도해주세요.");
    }
  };
  return { currentStatus, handleClick };
}
