// import "@trycreo/ui/dist/index.css";
import fs from "fs";
import path from "path";
import { Suspense, lazy } from "react";
import { Zap, Loader2 } from "lucide-react";
import Link from "next/link";
import Button from "../components/button";
import Header from "../components/header";

export default function Home() {
  const cwd = process.cwd();
  const tasksPath = path.join(cwd, "tasks");
  const files = fs.readdirSync(tasksPath);

  return (
    <main className='grid min-h-screen grid-rows-[auto_1fr] place-items-center bg-black relative'>
      <Header />
      <div className='flex flex-col p-4 px-2 rounded-xl w-full max-w-[240px] border bg-background styled-scrollbar max-h-96 overflow-y-auto relative'>
        <div className='px-2 mb-2 text-neutral-400 text-xs'> Tasks</div>
        <Suspense
          fallback={
            <div className='w-full grid place-items-center'>
              <Loader2 className='animate-spin' />
            </div>
          }
        >
          {files.map((file, index) => {
            return (
              <Link className='w-full' key={index} href={`/tasks/${file}`}>
                <Button>
                  <Zap size={16} className='mr-2 text-gray-200' />
                  <span>{file} </span>
                </Button>
              </Link>
            );
          })}
        </Suspense>
      </div>

      <div className='absolute bottom-4 text-sm text-gray-200'>
        Current Directory: {cwd}
      </div>
    </main>
  );
}
