import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { Container } from '@petersburg-bar/common-ui';
import { BrowserRouter } from 'react-router-dom';
import { Reset } from 'styled-reset';

import App from './app';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <StrictMode>
        <BrowserRouter>
            <Container>
                <Reset />
                <App setActiveRoute={(route: string) => console.log(`Фейковый вызов - ${route}`)} />
            </Container>
        </BrowserRouter>
    </StrictMode>,
);
