"use client";
import useSWR, { Fetcher, Key } from "swr";
import { Badge } from "@trycreo/ui/badge";

function getStatusClassName(status: string) {
  switch (status) {
    case "Open":
      return "bg-blue-100 text-blue-800";
    case "In Progress":
      return "bg-yellow-100 text-yellow-800";
    case "Escalated":
      return "bg-red-100 text-red-800";
    case "Closed":
      return "bg-green-100 text-green-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
}

export interface Ticket {
  ticketId: number;
  customerName: string;
  email: string;
  subject: string;
  description: string;
  priority: string;
  status: string;
  assignedTo: string;
  dateOpened: string;
}

function TicketDetails({ ticketId }: { ticketId: number }) {
  const uid: Key = ticketId.toString();
  const fetcher: Fetcher<Ticket, string> = (id) =>
    fetch(`https://app.trycreo.com/mock-api/support-tickets/${id}`).then(
      (res) => res.json()
    );

  const { data, error, isLoading } = useSWR(uid, fetcher);

  if (error) return <div>failed to load.</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <div className="py-6">
      <div className="text-xl font-medium text-black">
        #{data?.ticketId} <strong>{data?.subject}</strong>
      </div>
      <p className="text-gray-500">{data?.dateOpened}</p>
      <hr className="my-2" />
      <p className="text-gray-500">{data?.description}</p>
      <hr className="my-2" />
      <p className="text-gray-500">
        Created By: {data?.customerName} ({data?.email})
      </p>
      <p className="text-gray-500">Priority: {data?.priority}</p>
      <p className="text-gray-500">
        Status:{" "}
        <Badge className={getStatusClassName(data?.status!)}>
          {data?.status}
        </Badge>
      </p>
      <p className="text-gray-500">Assigned To: {data?.assignedTo}</p>
    </div>
  );
}

export default TicketDetails;
