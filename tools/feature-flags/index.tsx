import { DataTable } from "@trycreo/ui/components";
import { promises as fs } from "fs";
import { deleteAction, toggleNewUI } from "./actions";

async function FeatureFlags() {
  const file = await fs.readFile(
    process.cwd() + "/public/data/MOCK_DATA_SMALL.json",
    "utf8"
  );
  const data = JSON.parse(file);

  return (
    <>
      <div key="table" data-grid={{ x: 0, y: 0, w: 6, h: 4 }}>
        <h1>Users Table</h1>

        <DataTable
          selectionMode="multiple"
          data={data}
          pageSize={10}
          actions={[
            { name: "Delete", action: deleteAction },
            { name: "Toggle new UI", action: toggleNewUI },
          ]}
          isSearchable={true}
        />
      </div>
    </>
  );
}

export default FeatureFlags;
