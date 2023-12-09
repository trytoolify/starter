'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="grid w-full h-screen place-items-center">
      <div className="flex flex-col space-y-4 border rounded-lg p-4 bg-background">
        <span className="text-sm text-neutral-400">Error</span>
        <h2 className="self-start">Something went wrong!</h2>
        <button
          className="px-2 self-end border text-gray-200 w-fit py-1.5 rounded-lg hover:bg-white/10 flex items-center transition-all active:scale-[0.98] hover:shadow-[0_1px_hsl(0_0%_100%/0.15)_inset,0_-1px_hsl(0_0%_0%/1)_inset,0_10px_20px_-5px_hsl(0_0%_0%/1)]"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </button>
      </div>
    </div>
  );
}
