import type { FC } from 'react';

import { Navigation, NavigationItem } from './styles';

import type { AllRoutes } from '../../routes';

interface Navigation {
    items: AllRoutes;
    changeActiveItem: (route: string) => void;
    activeRoute: string;
}

const NavigationComponent: FC<Navigation> = ({ items, activeRoute, changeActiveItem }) => (
    <Navigation>
        {items.map(({ name, link }) => (
            <NavigationItem
                key={`${name}${link}`}
                $isActiveLink={activeRoute === link}
                to={link}
                onClick={() => changeActiveItem(link)}
            >
                {name}
            </NavigationItem>
        ))}
    </Navigation>
);

export { NavigationComponent as Navigation };
