import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import { Footer } from './footer';

describe('Footer component', () => {
    test('renders Footer component correctly', () => {
        render(<Footer />);

        expect(screen.getByText('Copyright © 2022. Все права защищены.')).toBeInTheDocument();
        expect(screen.getByText('Разработано slavuti.ch')).toBeInTheDocument();
    });
});
