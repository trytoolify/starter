"use client";

import * as React from "react";
import VisitorsDonut from "./donut-chart";
import VisitorsArea from "./area-chart";
import VisitorsBar from "./bar-chart";
import VisitorsLine from "./line-chart";

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <VisitorsDonut />
        <VisitorsArea />
        <VisitorsBar />
        <VisitorsLine />
      </div>
    </div>
  );
}
