"use client";
import {
  LineChart,
  BarChart,
  Heading,
  Text,
  BarList,
} from "@trycreo/ui/components";
import { Badge } from "@trycreo/ui/components/base";
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
    "Number of users": u.y,
    x: new Date(u.x).toLocaleDateString([], {
      month: "short",
      day: "numeric",
      year: "numeric",
    }),
  }));
  let filteredUsersLast30Min = usersLast30Min.map((u) => ({
    "Number of users": u.Users,
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
      <div className="flex [grid-template-rows:masonry] gap-4 [masonry-auto-flow:next]">
        <div className="flex flex-col gap-4">
          <div className="grid relative w-[580px] grid-rows-[auto_auto_1fr] rounded-md h-[35vh] p-4 bg-[hsl(0,0%,8%)]">
            <div className="flex items-center">
              <Text size={"4"}>Landing Impressions</Text>
              <Badge
                variant={"secondary"}
                className="ml-auto font-medium rounded-full"
              >
                Last 30 days
              </Badge>
            </div>
            <div className="my-4 mt-8 flex items-end">
              <div className="flex items-baseline space-x-3">
                <Heading className="!font-normal" size={"3"}>
                  36K
                </Heading>
                <Text size={"2"} className="text-muted-foreground">
                  Total Users
                </Text>
              </div>
              <div className="flex [align-items:last_baseline] space-x-3 ml-auto">
                <Heading className="!font-normal" size={"3"}>
                  1m 36s
                </Heading>
                <Text
                  size={"2"}
                  className="text-muted-foreground capitalize max-w-[120px] "
                >
                  Average engagement time
                </Text>
              </div>
            </div>
            <LineChart
              showYAxis={false}
              data={filteredUsersVisited}
              showLegend={false}
              index="x"
              categories={["Number of users"]}
              colors={["purple"]}
              yAxisWidth={30}
            />
          </div>

          <div className="grid rounded-md grid-rows-[auto_1fr] w-full aspect-video max-w-[60vw] relative h-[30vh] p-4 bg-[hsl(0,0%,8%)]">
            <div className="flex items-center mb-6">
              <Text size={"4"}>Onboarding funnel</Text>
              <Badge
                variant={"secondary"}
                className="ml-auto font-medium rounded-full"
              >
                Last 30 days
              </Badge>
            </div>
            <BarChart
              yAxisWidth={40}
              showLegend={false}
              data={funnel.map((u) => ({ name: u.Stage, value: u.Users }))}
              index="name"
              categories={["value"]}
              colors={["purple"]}
            />
          </div>
        </div>
        <div className="flex rounded-md flex-col w-[20vw] space-y-4 p-4 bg-[hsl(0,0%,8%)]">
          <div className="flex items-center">
            <Text className="mb-6" size={"4"}>
              Users per min
            </Text>
            <Badge
              variant={"secondary"}
              className="ml-auto font-medium rounded-full"
            >
              Last 35 min
            </Badge>
          </div>
          <BarChart
            showXAxis={false}
            showLegend={false}
            className="h-20"
            data={filteredUsersLast30Min}
            index="Time"
            categories={["Number of users"]}
            colors={["purple"]}
            showYAxis={false}
          />
          <BarList data={filteredUsersByCountry} color={"purple"} />{" "}
        </div>

        <div className="grid rounded-md grid-rows-[auto_auto_1fr] aspect-video max-w-[25vw] w-full h-[30vh] p-4 bg-[hsl(0,0%,8%)]">
          <div className="flex items-center">
            <Text size={"4"}>DAU</Text>
            <Badge
              variant={"secondary"}
              className="ml-auto font-medium rounded-full"
            >
              Last 30 days
            </Badge>
          </div>
          <div className="my-4 mt-8 flex items-end">
            <div className="flex items-baseline space-x-3">
              <Heading className="!font-normal" size={"4"}>
                48.1K
              </Heading>
              <Text size={"2"} className="text-muted-foreground">
                Total Users
              </Text>
            </div>
          </div>
          <LineChart
            showYAxis={false}
            showLegend={false}
            data={filteredDau}
            index="Date"
            categories={["DAU"]}
            colors={["purple"]}
            yAxisWidth={30}
          />
        </div>
      </div>
    </>
  );
}
