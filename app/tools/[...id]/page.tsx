// Do not remove or change this file. It's managed by Creo
import * as actions from "@/actions/creo";
import ToolPage from "@trycreo/core/pages/tools/index";

export default async function Page(props: any) {
  return (
    <>
      <ToolPage {...props} actions={actions} />
    </>
  );
}
