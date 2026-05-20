'use client';

import dynamic from 'next/dynamic';

const IntentWidget = dynamic(
  () => import('./intent-widget').then((mod) => mod.IntentWidget),
  {
    ssr: false,
    loading: () => (
      <div className="flex min-h-168` items-center justify-center border border-dashed border-slate-300 bg-white/70 text-sm text-slate-500">
        Loading widget shell...
      </div>
    ),
  }
);

export function IntentWidgetShell() {
  return <IntentWidget />;
}
