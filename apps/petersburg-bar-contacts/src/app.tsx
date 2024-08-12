import type { FC } from 'react';
import './index.css';

import { useScroll } from '@petersburg-bar/common';

const App: FC = () => {
    useScroll('petersburg-bar-contacts-scroll');

    return (
        <>
            <div className="color-white">Контакты</div>
        </>
    );
};

export default App;
