import fs from "fs/promises";
import path from "path";

import ToolsListClient from "./tools-list-client";

const excludedFiles = [".DS_Store", "loading.tsx", "error.tsx"];

export default async function Home() {
  const cwd = process.cwd();
  const toolsPath = path.join(cwd, "app/tools");
  let files = await fs.readdir(toolsPath);
  files = files.filter((file: any) => !excludedFiles.includes(file));

  return (
    <>
      <ToolsListClient files={files} />
    </>
  );
}
