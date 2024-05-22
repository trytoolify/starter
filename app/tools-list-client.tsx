"use client";

import ToolsList from "@trycreo/ui/core/tools-list";
import Link from "next/link";

export default function ToolsListClient({ files }: { files: string[] }) {
  return <ToolsList linkComponent={Link} files={files} />;
}
