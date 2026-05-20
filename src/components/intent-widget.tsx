'use client'

import {
  WidgetConfigProvider,
  Widget,
} from '@aurora-is-near/intents-swap-widget';
import { useAppKitWallet } from '@/hooks/useAppKitWallet';
import { WalletConnectButton } from '@/components/wallet-connect-button';

export  function IntentWidget() {
  const { address: walletAddress, isConnecting: isLoading } = useAppKitWallet();

  return (
    <WidgetConfigProvider
      config={{ connectedWallets: { default: walletAddress } }}
    >
      <Widget
        isFullPage
        isLoading={isLoading}
        FooterComponent={<WalletConnectButton />}
      />
    </WidgetConfigProvider>
  );
}
