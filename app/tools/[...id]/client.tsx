"use client";

import { useEffect } from "react";

export default function ToolClient() {
  useEffect(() => {
    let debounceTimer: any;

    const handleKeyDown = (e: any) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();

        // Clear the existing timer if the function is called again within the delay
        clearTimeout(debounceTimer);

        // Set a new timer
        debounceTimer = setTimeout(() => {
          window.parent.postMessage({ type: "CMD_K_PRESSED" }, "*");
        }, 100); // Delay in milliseconds
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup function to remove the event listener and clear the timer
    return () => {
      clearTimeout(debounceTimer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return <></>;
}
