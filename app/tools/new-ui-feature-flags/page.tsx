import DataTable from "@trycreo/ui/data-table";
import { promises as fs } from "fs";
import { deleteAction, toggleNewUI } from "./actions";
import { columns } from "./client";
import { Card } from "@trycreo/ui/card";

async function FeatureFlags() {
  const file = await fs.readFile(
    process.cwd() + "/public/data/MOCK_DATA_SMALL.json",
    "utf8"
  );
  const data = JSON.parse(file);

  return (
    <div className="p-4 m-8 max-w-6xl mx-auto">
      <div className="mb-4">
        <h1 className="font-semibold tracking-tight">Users Table</h1>
        <p className="text-sm text-muted-foreground">
          Run actions on one or multiple users in this table
        </p>
      </div>

      <Card className="p-8">
        <DataTable
          selectionMode="multiple"
          columns={columns}
          data={data}
          pageSize={10}
          actions={[
            { name: "Delete", action: deleteAction },
            { name: "Toggle new UI", action: toggleNewUI },
          ]}
          isSearchable={true}
        />
      </Card>
    </div>
  );
}

export default FeatureFlags;
