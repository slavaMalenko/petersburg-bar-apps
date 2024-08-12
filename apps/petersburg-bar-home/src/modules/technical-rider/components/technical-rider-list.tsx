import type { FC } from 'react';

import { RetractableBlocks } from '@petersburg-bar/common';
import styled from 'styled-components';

import { ListLi, ListUl } from './styles';
import { useRiders } from '../api';

const Container = styled.div`
    width: 45%;
`;

export const TechnicalRiderList: FC = () => {
    const { data: riders, isLoading } = useRiders();

    if (!riders || isLoading) return <>Загрузка данных...</>;

    return (
        <Container>
            <RetractableBlocks
                descriptionBlocks={riders.map(({ title, description }) => ({
                    title,
                    description: (
                        <ListUl>
                            {description.map((item, index) => (
                                <ListLi key={`${item} ${index}`}>{item}</ListLi>
                            ))}
                        </ListUl>
                    ),
                }))}
                localStorageKey="openBlockIndexHome"
            />
        </Container>
    );
};
