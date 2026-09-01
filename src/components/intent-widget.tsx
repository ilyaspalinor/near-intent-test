'use client'

import {
  WidgetConfigProvider,
  Widget,
} from '@aurora-is-near/intents-swap-widget-standalone';

export  function IntentWidget() {
  return (
    <WidgetConfigProvider
      config={{
        apiKey: process.env.NEXT_PUBLIC_INTENTS_API_KEY,
        // The widget uses Alchemy's Solana RPC to load native SOL and SPL
        // balances. Without it, a connected Solflare wallet is treated as
        // having no SOL and swaps are limited to dry quotes.
        alchemyApiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
      }}
    >
      <Widget defaultMode="swap" />
    </WidgetConfigProvider>
  );
}
