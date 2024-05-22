import DataTable from "@trycreo/ui/data-table";
import { promises as fs } from "fs";
import { deleteAction, toggleNewUI } from "./actions";
import { columns } from "./client";

async function FeatureFlags() {
  const file = await fs.readFile(
    process.cwd() + "/public/data/MOCK_DATA_SMALL.json",
    "utf8"
  );
  const data = JSON.parse(file);

  return (
    <div className="p-8 m-8 bg-white">
      <h1>Users Table</h1>

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
    </div>
  );
}

export default FeatureFlags;
