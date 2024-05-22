"use client";

import { useEffect } from "react";
import ErrorBoundary from "@trycreo/ui/core/error-boundary";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <ErrorBoundary reset={reset} />;
}
