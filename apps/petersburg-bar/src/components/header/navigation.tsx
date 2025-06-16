import type { FC } from 'react';

import { Link } from 'react-router-dom';

import { Navigation, NavigationItem } from './styles';

import type { AllRoutes } from '../../routes';

interface Navigation {
    items: AllRoutes;
    changeActiveItem: (route: string) => void;
    activeRoute: string;
}

const NavigationComponent: FC<Navigation> = ({ items, activeRoute, changeActiveItem }) => (
    <Navigation role="navigation">
        {items.map(({ name, link }, index) => (
            <NavigationItem
                key={`${name}${link}${index}`}
                $isActiveLink={activeRoute === link}
                as={Link}
                to={link}
                onClick={() => changeActiveItem(link)}
            >
                {name}
            </NavigationItem>
        ))}
    </Navigation>
);

export { NavigationComponent as Navigation };
