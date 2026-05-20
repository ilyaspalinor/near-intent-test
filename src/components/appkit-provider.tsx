'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createAppKit } from '@reown/appkit/react';
import { WagmiProvider } from 'wagmi';
import { useState } from 'react';

import {
  appKitMetadata,
  networks,
  projectId,
  wagmiAdapter,
} from '@/config/appkit';

createAppKit({
  adapters: [wagmiAdapter],
  networks: [...networks],
  projectId,
  metadata: appKitMetadata,
  defaultNetwork: networks[0],
  features: {
    analytics: false,
  },
});

type Props = {
  children: React.ReactNode;
};

export function AppKitProvider({ children }: Props) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}
