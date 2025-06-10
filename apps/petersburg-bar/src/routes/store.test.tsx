import { renderHook, act } from '@testing-library/react';

import { useRoutes } from './store';

describe('useRoutes', () => {
    it('changes active route', () => {
        const { result } = renderHook(() => useRoutes());

        act(() => {
            result.current.setActiveRoute('/menu');
        });

        expect(result.current.activeRoute).toBe('/menu');
    });
});
