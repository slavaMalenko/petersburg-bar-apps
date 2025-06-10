import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import App from './app';

describe('Contacts component', () => {
    test('renders Footer component correctly', () => {
        render(<App />);

        expect(screen.getByText('Контакты')).toBeInTheDocument();
    });
});
