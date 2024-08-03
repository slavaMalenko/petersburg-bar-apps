import type { FC } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Home from './modules';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            staleTime: 60000,
            retry: true,
        },
    },
});

const App: FC<{ setActiveRoute: (route: string) => void }> = ({ setActiveRoute }) => (
    <QueryClientProvider client={queryClient}>
        <Home setActiveRoute={setActiveRoute} />
    </QueryClientProvider>
);

export default App;
