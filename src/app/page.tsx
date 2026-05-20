import { IntentWidgetShell } from "@/components/intent-widget-shell";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10 text-slate-950">
      <div className="mx-auto w-full max-w-5xl">
        <IntentWidgetShell />
      </div>
    </main>
  );
}
