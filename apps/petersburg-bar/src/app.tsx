import type { FC } from 'react';
import './index.css';

import { Container } from '@petersburg-bar/ui';
import { BrowserRouter } from 'react-router-dom';
import { Reset } from 'styled-reset';

import { Footer, Header } from './components';
import { Router } from './routes';

const App: FC = () => (
    <>
        <Reset />
        <BrowserRouter>
            <Container>
                <Header />

                <main>
                    <Router />
                </main>

                <Footer />
            </Container>
        </BrowserRouter>
    </>
);

export default App;
