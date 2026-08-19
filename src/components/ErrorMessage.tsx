import { AlertCircle } from "lucide-react";

export function ErrorMessage({ message }: { message: string }) {
    return (
      <div className="flex flex-col items-center gap-2 text-red-400 py-10">
        <AlertCircle size={28} />
        <p className="text-sm">{message}</p>
      </div>
    );
  }

