import { cookieStorage, createStorage } from '@wagmi/core';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { mainnet } from '@reown/appkit/networks';

const fallbackProjectId = 'b56e18d47c72ab683b10814fe9495694';

export const projectId =
  process.env.NEXT_PUBLIC_REOWN_PROJECT_ID ?? fallbackProjectId;

export const networks = [mainnet] as const;

export const appKitMetadata = {
  name: 'NEAR Intent Test',
  description: 'AppKit-backed wallet connection for the Aurora intents widget',
  url: process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
};

export const wagmiAdapter = new WagmiAdapter({
  projectId,
  networks: [...networks],
  storage: createStorage({
    storage: cookieStorage,
  }),
  ssr: false,
});
