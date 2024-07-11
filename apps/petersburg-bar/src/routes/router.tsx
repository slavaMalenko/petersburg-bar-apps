/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import type { FC } from 'react';
import { lazy, useEffect, Suspense } from 'react';

import { ErrorBoundary } from 'react-error-boundary';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { useRoutes } from './store';

const Home = lazy(() => import('petersburgBarHomePage/App'));
const Contacts = lazy(() => import('petersburgBarContactsPage/App'));

export const Router: FC = () => {
    const navigate = useNavigate();
    const { activeRoute, setActiveRoute } = useRoutes(({ activeRoute, setActiveRoute }) => ({
        activeRoute,
        setActiveRoute,
    }));

    useEffect(() => navigate(activeRoute), [activeRoute, navigate]);

    return (
        <Routes>
            <Route
                element={
                    <Suspense fallback="Loading...">
                        <ErrorBoundary fallback={<div>Ошибка компиляции, не пугайся</div>}>
                            <Home setActiveRoute={setActiveRoute} />
                        </ErrorBoundary>
                    </Suspense>
                }
                path="/"
            />
            <Route
                element={
                    <Suspense fallback="Loading...">
                        <ErrorBoundary fallback={<div>Ошибка компиляции, не пугайся</div>}>
                            <Contacts />
                        </ErrorBoundary>
                    </Suspense>
                }
                path="/cooperation"
            />
        </Routes>
    );
};
