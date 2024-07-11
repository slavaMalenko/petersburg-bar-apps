import type { FC } from 'react';

import { BrowserRouter } from 'react-router-dom';
import { Reset } from 'styled-reset';

import { Footer, Header } from './components';
import { Router } from './routes';
import { Container } from '@petersburg-bar/common-ui';

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
