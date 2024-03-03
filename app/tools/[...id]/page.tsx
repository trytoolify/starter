import dynamic from "next/dynamic";
import Tool from "@trycreo/ui/dist/src/components/ui/core/tool";

export default async function ToolPage({
  params,
  searchParams,
}: {
  params: { id?: string[] };
  searchParams: { token: string; organizationId: number; domain: string };
}) {
  const fileName = params.id?.[0] ?? "";

  return (
    <Tool
      entityName={fileName}
      organizationId={searchParams.organizationId}
      domain={searchParams.domain}
      token={searchParams.token}
      dynamic={dynamic}
    />
  );
}
