import type { FC } from 'react';

import Home from './components';

const App: FC<{ setActiveRoute: (route: string) => void }> = ({ setActiveRoute }) => (
    <Home setActiveRoute={setActiveRoute} />
);

export default App;
