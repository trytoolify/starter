import { Card } from "@trycreo/ui/card";
import DataTable from "@trycreo/ui/data-table";
import { BarChart } from "@trycreo/ui/bar-chart";

export default async function Products() {
  const response = await fetch(
    "https://6609b6140f324a9a2883ac57.mockapi.io/api/v1/products"
  );

  const data = await response.json();

  const groupedByMaterial = data.reduce((acc: any, product: any) => {
    const material = product.material;
    if (!acc[material]) {
      acc[material] = 0;
    }
    acc[material]++;
    return acc;
  }, {});

  const chartData = Object.entries(groupedByMaterial).map(([name, value]) => ({
    name,
    value,
  }));

  return (
    <div className="p-8">
      <h1>Products</h1>

      <Card className="p-8 my-2">
        <DataTable data={data} />
      </Card>

      <Card className="p-8 h-96">
        <BarChart
          data={chartData}
          index="name"
          colors={["#374151"]}
          categories={["value"]}
        />
      </Card>
    </div>
  );
}
