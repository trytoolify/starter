import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@trytoolify/ui/card";
import DataTable from "@trytoolify/ui/data-table";
import { ordersData } from "./data";

export default function Table() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Orders</CardTitle>
        <CardDescription>All orders, paginated and filterable.</CardDescription>
      </CardHeader>
      <CardContent>
        <DataTable data={ordersData} isSearchable />
      </CardContent>
    </Card>
  );
}
