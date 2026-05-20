'use client';

import { useDisconnect } from '@reown/appkit/react';

import { useAppKitWallet } from '@/hooks/useAppKitWallet';

const truncateAddress = (address?: string) => {
  if (!address) {
    return 'Connect wallet';
  }

  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

export function WalletConnectButton() {
  const { address, isConnected, isConnecting, open } = useAppKitWallet();
  const { disconnect } = useDisconnect();

  const handleClick = async () => {
    if (isConnected) {
      await disconnect({ namespace: 'eip155' });
      return;
    }

    await open({ view: 'Connect' });
  };

  return (
    <button
      type="button"
      onClick={() => {
        void handleClick();
      }}
      disabled={isConnecting}
      className="inline-flex min-h-11 w-full items-center justify-center rounded-2xl border border-slate-200 bg-slate-950 px-4 py-3 text-sm font-medium text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {isConnecting
        ? 'Connecting...'
        : isConnected
          ? `Disconnect ${truncateAddress(address)}`
          : 'Connect wallet'}
    </button>
  );
}
