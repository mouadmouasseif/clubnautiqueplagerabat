// app/help/layout.tsx
import { ReactNode } from "react";
import Menue from "@/components/Menue";

export default function HelpLayout({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-4 min-h-screen ">
            <Menue /> 

      <main className="container mx-auto w-full  bg-gray-100 shadow-md rounded-lg p-5">

        {children}
      </main>
    </div>
  );
}
