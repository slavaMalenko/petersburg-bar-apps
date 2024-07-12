import ReactDOM from 'react-dom/client';

import { Reset } from 'styled-reset';

import App from './app';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
        <Reset />
        <App />
    </>,
);
