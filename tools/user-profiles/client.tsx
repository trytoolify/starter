"use client";

import DataTable from "@trycreo/ui/dist/components/ui/data-table";
import { useState } from "react";

export const columns = [
  {
    accessorKey: "first_name",
    header: "First Name",
  },
  {
    accessorKey: "last_name",
    header: "Last Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "ip_address",
    header: "IP address",
  },
];

export default function TableClient({ data }: { data: any[] }) {
  const [selectedRow, setSelectedRow] = useState<any>(null);

  function onRowsSelectedCallback(selectedRows: any) {
    setSelectedRow(selectedRows[0]);
  }

  return (
    <div className="flex flex-col space-y-4">
      <DataTable
        selectionMode="single"
        onRowsSelected={onRowsSelectedCallback}
        columns={columns}
        data={data}
        pageSize={10}
        isSearchable={true}
      />
    </div>
  );
}
