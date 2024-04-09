import { Loader } from "lucide-react";

export default function Loading() {
  return (
    <div className="h-screen flex justify-center items-center">
      <Loader className="h-4 w-4 animate-spin" />
    </div>
  );
}
