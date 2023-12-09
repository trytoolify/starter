import { Suspense, lazy } from "react";
import dynamic from "next/dynamic";
import path from "path";
import { Loader2 } from "lucide-react";
import Link from "next/link";

import { LayoutProvider } from "@trycreo/ui/components";
import Header from "../../../components/header";
import {
  createAiSession,
  getFile,
  getLayout,
  saveLayout,
} from "@/actions/layout";

// to prevent it from generating this at build time once
// export const dynamic = "force-dynamic";

export default async function Task({
  params,
  searchParams,
}: {
  params: { id?: string[] };
  searchParams: { token: string };
}) {
  const fileName = params.id?.[0] ?? "";

  if (process.env.NODE_ENV === "development") {
    // hacks for now
    const CustomModule = dynamic(() => import(`/tools/${fileName}`));
    return (
      <Suspense
        fallback={
          <div className='w-full grid place-items-center'>
            <Loader2 className='animate-spin' />
          </div>
        }
      >
        <div className='grid grid-rows-[auto_1fr] h-screen relative'>
          <Header />
          <LayoutProvider
            getFile={getFile}
            getLayout={getLayout}
            saveLayout={saveLayout}
            createAiSession={createAiSession}
            fileName={fileName}
          >
            {/* <div className="absolute bg-[radial-gradient(35.28%_35.28%_at_50%_50%,#090909_0%,rgba(0,0,0,0.00)_100%)] rounded-full top-0 mx-auto h-[60vh] left-0 right-0 -mt-[30vh]" /> */}
            <CustomModule />
          </LayoutProvider>{" "}
        </div>
      </Suspense>
    );
  } else {
    // TODO: swap to actual endpoint
    const isValidTokenResponse = await fetch(
      `http://localhost:3000/api/validate-iframe-token?token=${searchParams.token}`
    );

    if (!isValidTokenResponse.ok) {
      return (
        <div className='w-full grid place-items-center'>
          <h1 className='text-3xl font-bold'>Invalid token</h1>
        </div>
      );
    } else {
      const CustomModule = dynamic(() => import(`/tasks/${fileName}`));

      return (
        <Suspense
          fallback={
            <div className='w-full grid place-items-center'>
              <Loader2 className='animate-spin' />
            </div>
          }
        >
          <div className='h-screen w-full max-w-screen-[2560px] grid grid-cols-12 grid-rows-[repeat(8,minmax(0,1fr))] gap-2 mx-auto relative p-2'>
            {/* <div className="absolute bg-[radial-gradient(35.28%_35.28%_at_50%_50%,#090909_0%,rgba(0,0,0,0.00)_100%)] rounded-full top-0 mx-auto h-[60vh] left-0 right-0 -mt-[30vh]" /> */}
            <CustomModule />
          </div>
        </Suspense>
      );
    }
  }
}
