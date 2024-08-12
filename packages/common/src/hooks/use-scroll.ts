import { useEffect } from 'react';

/**
 * Хук useScroll
 *
 * Этот хук сохраняет текущее значение прокрутки страницы в localStorage при закрытии или перезагрузке страницы,
 * а также восстанавливает его при следующей загрузке страницы. В качестве ключа для хранения используется
 * переданный параметр key.
 *
 * @param {string} key - Ключ, по которому будет сохраняться и восстанавливаться значение прокрутки в localStorage.
 */
export const useScroll = (key: string) => {
    useEffect(() => {
        // Восстановить позицию прокрутки через 100 мс после загрузки страницы
        const timer = setTimeout(() => {
            window.scrollTo({ top: +sessionStorage.getItem(key) || 0, behavior: 'smooth' });
        }, 300);

        const saveScrollPosition = () => sessionStorage.setItem(key, window.scrollY.toString());

        // Сохранение позиции прокрутки при прокрутке и при закрытии окна
        window.addEventListener('scroll', saveScrollPosition, { passive: true });
        window.addEventListener('beforeunload', saveScrollPosition);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('scroll', saveScrollPosition);
            window.removeEventListener('beforeunload', saveScrollPosition);
        };
    }, [key]);
};
