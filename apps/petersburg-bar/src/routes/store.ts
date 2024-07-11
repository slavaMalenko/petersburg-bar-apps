import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export type AllRoutes = { name: string; link: string }[];

interface Routes {
    allRoutes: AllRoutes;
    activeRoute: string;
    setActiveRoute: (route: string) => void;
}

export const useRoutes = create<Routes>()(
    devtools(
        persist(
            (set) => ({
                allRoutes: [
                    { name: 'Главная', link: '/' },
                    { name: 'Меню', link: '/menu' },
                    { name: 'Афиша', link: '/poster' },
                    { name: 'Сотрудничество', link: '/cooperation' },
                    { name: 'Галерея', link: '/gallery' },
                    { name: 'Новости', link: '/news' },
                ],
                activeRoute: '/',
                setActiveRoute: (route) => {
                    set({ activeRoute: route });
                },
            }),
            {
                name: 'routes-storage',
            },
        ),
    ),
);
