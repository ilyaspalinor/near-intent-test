'use client';

import { useAppKit, useAppKitAccount } from '@reown/appkit/react';

export function useAppKitWallet() {
  const { open } = useAppKit();
  const { address, isConnected, status } = useAppKitAccount({
    namespace: 'eip155',
  });

  return {
    address,
    isConnected,
    isConnecting: status === 'connecting' || status === 'reconnecting',
    open,
  };
}
