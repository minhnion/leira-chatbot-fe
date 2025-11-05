import { Outlet } from "@tanstack/react-router";
import type { JSX } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

function LayoutContent(): JSX.Element {
  return (
    <div className="flex min-h-screen">
      <div className="flex-1 flex flex-col transition-all duration-300 ease-in-out">
        <Header />

        <main className="flex-1 px-4 py-2 md:py-4 bg-design-primary">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export function WorkspaceLayout(): JSX.Element {
  return <LayoutContent />;
}
