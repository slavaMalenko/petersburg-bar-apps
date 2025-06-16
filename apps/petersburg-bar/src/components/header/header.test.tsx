import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import '@testing-library/jest-dom';
import 'jest-styled-components';
import { HeaderComponent } from './header';

jest.mock('../../routes', () => ({
    useRoutes: jest.fn(() => ({
        allRoutes: ['Home', 'About', 'Contact'],
        activeRoute: 'Home',
        setActiveRoute: jest.fn(),
    })),
}));

describe('HeaderComponent', () => {
    test('renders HeaderComponent correctly', () => {
        render(
            <BrowserRouter>
                <HeaderComponent />
            </BrowserRouter>,
        );

        expect(screen.getByRole('img')).toBeInTheDocument();
        expect(screen.getByRole('navigation')).toBeInTheDocument();

        expect(screen.getByText('Бронированиe')).toBeInTheDocument();
        expect(screen.getByRole('button')).toHaveStyleRule('font-size', '15px');
    });
});
