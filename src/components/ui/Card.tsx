import type { ReactNode } from "react";

export default function Card({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-sm border border-stone-300 bg-white p-6">
      {children}
    </div>
  );
}
