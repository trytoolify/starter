"use client";

import * as React from "react";
import Table from "./table";
import DataArea from "./area-chart";

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto my-8 flex flex-col gap-4">
      <div>
        <h1 className="text-xl font-semibold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          List of all orders in our store, and channel based traffic.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <Table />
        <DataArea />
      </div>
    </div>
  );
}
