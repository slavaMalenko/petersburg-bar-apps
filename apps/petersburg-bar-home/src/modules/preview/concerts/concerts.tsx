import type { FC } from 'react';
import { useState } from 'react';

import { PreviewConcertsComponent as PreviewConcerts } from './preview-concerts';
import { ConcertsBlock, ConcertsContainer, ConcertsNavigate, ConcertsNavigateItem } from './styles';

const concertNavigate: { key: string; label: string }[] = [
    { key: 'prevConcerts', label: 'Ближайшие' },
    { key: 'soonConcerts', label: 'Скоро' },
];

export const Concerts: FC = () => {
    const [activeNavigateItem, setActiveNavigateItem] = useState(
        localStorage.getItem('concertsType') || 'prevConcerts',
    );

    return (
        <ConcertsContainer>
            <ConcertsNavigate>
                {concertNavigate.map(({ key, label }) => (
                    <ConcertsNavigateItem
                        key={`${key}${label}`}
                        $isActiveLink={key === activeNavigateItem}
                        onClick={() => {
                            localStorage.setItem('concertsType', key);
                            setActiveNavigateItem(key);
                        }}
                    >
                        {label}
                    </ConcertsNavigateItem>
                ))}
            </ConcertsNavigate>

            <ConcertsBlock>
                <PreviewConcerts concertsType={activeNavigateItem} />
            </ConcertsBlock>
        </ConcertsContainer>
    );
};
