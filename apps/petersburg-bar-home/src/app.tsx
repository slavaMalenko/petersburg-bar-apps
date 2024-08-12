import type { FC } from 'react';

import { useScroll } from '@petersburg-bar/common';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Home from './modules';

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            staleTime: 60000,
            retry: true,
        },
    },
});

const App: FC<{ setActiveRoute: (route: string) => void }> = ({ setActiveRoute }) => {
    useScroll('petersburg-bar-home-scroll');

    return (
        <QueryClientProvider client={queryClient}>
            <Home setActiveRoute={setActiveRoute} />
        </QueryClientProvider>
    );
};

export default App;
