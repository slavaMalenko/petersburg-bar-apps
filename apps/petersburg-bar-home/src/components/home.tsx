import type { FC } from 'react';

import { AboutEstablishments } from './about-establishment';
import { Contacts } from './contacts';
import { Menu } from './menu';
import { Preview } from './preview';
import { TechnicalRider } from './technical-rider';

const Home: FC<{
    setActiveRoute: (route: string) => void;
}> = ({ setActiveRoute }) => (
    <>
        <Preview />
        <Menu setActiveRoute={setActiveRoute} />
        <AboutEstablishments setActiveRoute={setActiveRoute} />
        <TechnicalRider />
        <Contacts />
    </>
);

export default Home;
