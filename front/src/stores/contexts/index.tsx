import { ReactNode } from 'react';
import { AgentsProvider } from './agentsStore';

interface AppProviderProps {
  children: ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <AgentsProvider>{children}</AgentsProvider>
  );
}

