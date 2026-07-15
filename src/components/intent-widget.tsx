'use client'

import {
  WidgetConfigProvider,
  Widget,
} from '@aurora-is-near/intents-swap-widget-standalone';

export  function IntentWidget() {
  return (
    <WidgetConfigProvider config={{ }}>
      <Widget defaultMode="swap" />
    </WidgetConfigProvider>
  );
}
