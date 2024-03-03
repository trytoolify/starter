"use client";

import { Badge } from "@trycreo/ui/dist/src/components/ui/badge";
import { BarChart } from "@trycreo/ui/dist/src/components/ui/bar-chart";
import { LineChart } from "@trycreo/ui/dist/src/components/ui/line-chart";
import {
  dau,
  funnel,
  usersByCountry,
  usersLast30Min,
  usersVisited,
} from "./data";

export default function Charts() {
  let filteredUsersByCountry = usersByCountry.map((u) => ({
    name: u.Country,
    value: u.Users,
  }));
  let filteredUsersVisited = usersVisited.map((u) => ({
    users: u.y,
    x: new Date(u.x).toLocaleDateString([], {
      month: "short",
      day: "numeric",
      year: "numeric",
    }),
  }));
  let filteredUsersLast30Min = usersLast30Min.map((u) => ({
    users: u.Users,
    Time: new Date(u.Time).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
  }));
  let filteredDau = dau.map((u) => ({
    DAU: u.DAU,
    Date: new Date(u.Date).toLocaleDateString([], {
      month: "short",
      day: "numeric",
      year: "numeric",
    }),
  }));

  return (
    <>
      <div className="grid md:grid-cols-3 gap-2 md:gap-4 p-4 w-full md:w-3/4 mx-auto">
        <div className="flex flex-col space-y-2 p-4 bg-background md:col-span-3 h-80">
          <div className="flex items-center">
            <h1 className="text-xl">Landing Impressions</h1>
            <Badge
              variant={"secondary"}
              className="ml-auto font-medium rounded-full"
            >
              Last 30 days
            </Badge>
          </div>
          <div className="flex items-end">
            <div className="flex items-baseline space-x-3">
              <h1 className="text-xl">36K</h1>
              <h3 className="text-muted-foreground">Total Users</h3>
            </div>
            <div className="flex [align-items:last_baseline] space-x-3 ml-auto">
              <h1 className="!font-normal text-xl">1m 36s</h1>
              <h3 className="text-muted-foreground capitalize ">
                Average engagement time
              </h3>
            </div>
          </div>

          <div className="h-full">
            <LineChart
              data={filteredUsersVisited}
              index="x"
              categories={["users"]}
              colors={["#374151"]}
            />
          </div>
        </div>

        <div className="flex flex-col space-y-2 p-4 bg-background h-80">
          <div className="flex items-center mb-2">
            <h1 className="text-xl">Onboarding funnel</h1>
            <Badge
              variant="secondary"
              className="ml-auto font-medium rounded-full"
            >
              Last 30 days
            </Badge>
          </div>
          <div className="h-full">
            <BarChart
              data={funnel.map((u) => ({
                name: u.Stage,
                value: u.Users,
              }))}
              index="name"
              colors={["#374151"]}
              categories={["value"]}
            />
          </div>
        </div>

        <div className="flex flex-col space-y-2 p-4 bg-background h-80">
          <div className="flex items-center">
            <h1 className="text-xl">Users per min</h1>
            <Badge
              variant="secondary"
              className="ml-auto font-medium rounded-full"
            >
              Last 35 min
            </Badge>
          </div>
          <div className="h-full">
            <BarChart
              data={filteredUsersLast30Min}
              index="Time"
              colors={["#374151"]}
              categories={["users"]}
            />
          </div>
        </div>

        <div className="flex flex-col space-y-2 p-4 bg-background h-80">
          <div className="flex items-center">
            <h1 className="text-xl">Daily Active Users</h1>
            <Badge
              variant="secondary"
              className="ml-auto font-medium rounded-full"
            >
              Last 30 days
            </Badge>
          </div>
          <div className="flex items-end">
            <div className="flex items-baseline space-x-3">
              <h1 className="text-xl">4K</h1>
              <h3 className="text-muted-foreground">Total Users</h3>
            </div>
          </div>

          <div className="h-full">
            <LineChart
              data={filteredDau}
              index="Date"
              categories={["DAU"]}
              colors={["#374151"]}
            />
          </div>
        </div>
      </div>
    </>
  );
}
