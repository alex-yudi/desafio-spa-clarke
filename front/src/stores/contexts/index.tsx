import { ReactNode } from 'react';
import { ExampleProvider } from './counterStore';

interface AppProviderProps {
  children: ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <ExampleProvider>{children}</ExampleProvider>
  );
}

