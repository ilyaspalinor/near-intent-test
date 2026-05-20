'use client'

import {
  WidgetConfigProvider,
  Widget,
} from '@aurora-is-near/intents-swap-widget';

export  function IntentWidget() {
  return (
    <WidgetConfigProvider config={{ }}>
      <Widget />
    </WidgetConfigProvider>
  );
}