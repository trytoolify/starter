import { Tickets } from "./tickets";

export default async function CustomerSupportTickets() {
  const response = await fetch(
    "https://app.trycreo.com/mock-api/support-tickets",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );

  const { tickets } = await response.json();

  return (
    <div className="mx-auto max-w-7xl p-8">
      <div className="mb-8">
        <h1 className="font-semibold tracking-tight">
          Customer Support Tickets
        </h1>
        <p className="text-sm text-muted-foreground">
          Dashboard to track customer support tickets
        </p>
      </div>

      <Tickets data={tickets} />
    </div>
  );
}
