import type { FC } from 'react';

import { Container } from '@petersburg-bar/common';
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
