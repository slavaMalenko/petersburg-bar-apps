import type { FC } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Home from './modules';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            staleTime: 5 * 60 * 1000,
            retry: 2,
        },
    },
});

const App: FC<{ setActiveRoute: (route: string) => void }> = ({ setActiveRoute }) => (
    <QueryClientProvider client={queryClient}>
        <Home setActiveRoute={setActiveRoute} />
    </QueryClientProvider>
);

export default App;
