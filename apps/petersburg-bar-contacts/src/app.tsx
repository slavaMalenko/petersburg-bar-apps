import type { FC } from 'react';

import { useScroll } from '@petersburg-bar/hooks';;

const App: FC = () => {
    useScroll('petersburg-bar-contacts-scroll');

    return (
        <>
            <div className="color-white">Контакты</div>
        </>
    );
};

export default App;
