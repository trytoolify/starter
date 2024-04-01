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
    <div className="p-10">
      <h1 className="mb-5 scroll-m-20 text-2xl font-semibold tracking-tight">
        Customer Support Tickets
      </h1>
      <Tickets data={tickets} />
    </div>
  );
}
