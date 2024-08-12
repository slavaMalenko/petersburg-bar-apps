import type { FC } from 'react';

import { Button } from '@petersburg-bar/common';

import { Navigation } from './navigation';
import { ButtonCss, Header, Logo } from './styles';
import { useRoutes } from '../../routes';

export const HeaderComponent: FC = () => {
    const { allRoutes, activeRoute, setActiveRoute } = useRoutes(({ allRoutes, activeRoute, setActiveRoute }) => ({
        allRoutes,
        activeRoute,
        setActiveRoute,
    }));

    return (
        <Header>
            <Logo />
            <Navigation activeRoute={activeRoute} changeActiveItem={setActiveRoute} items={allRoutes} />
            <Button $hoverRight $commonStyles={ButtonCss} text="Бронированиe" />
        </Header>
    );
};
