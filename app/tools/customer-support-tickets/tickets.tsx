"use client";
import DataTable from "@trycreo/ui/data-table";
import { columns } from "./client";
import { useState } from "react";
import TicketDetails, { Ticket } from "./ticket-details";
import { Card, CardContent } from "@trycreo/ui/card";

export const Tickets = (props: { data: Ticket[] }): React.ReactNode => {
  const [selectedTicketId, setSelectedTicketId] = useState<number | null>(null);

  const metrics = [
    { title: "Total Tickets", value: "120" },
    { title: "Open Tickets", value: "45" },
    { title: "Closed Tickets", value: "60" },
    { title: "Escalated Tickets", value: "15" },
  ];

  return (
    <div className="">
      <h2 className="text-2xl font-semibold mb-4">📅 Today</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {metrics.map((metric) => (
          <Card key={metric.title} className="flex-grow p-4">
            <CardContent>
              <div className="text-xl">{metric.title}</div>
              <div className="text-3xl font-bold">{metric.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <h1 className="mb-5 scroll-m-20 text-2xl font-semibold tracking-tight">
        Tickets
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-2 flex flex-col">
          <Card className="flex-grow p-4">
            <CardContent>
              <DataTable
                selectionMode="single"
                columns={columns}
                data={props.data}
                pageSize={5}
                isSearchable={true}
                onRowsSelected={(selectedRows: Ticket[] | undefined) => {
                  const validTickets = selectedRows!.filter(
                    (ticket): ticket is Ticket => ticket !== undefined
                  );
                  if (
                    validTickets.length > 0 &&
                    validTickets[0] &&
                    validTickets[0].ticketId
                  ) {
                    setSelectedTicketId(validTickets[0].ticketId);
                  }
                }}
              />
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col">
          <Card className="flex-grow">
            <CardContent>
              {selectedTicketId ? (
                <TicketDetails ticketId={selectedTicketId} />
              ) : null}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
