import type { FC } from 'react';

import { RetractableBlocks } from '@petersburg-bar/common-ui';
import styled from 'styled-components';

import { ListLi, ListUl } from './styles';

const Container = styled.div`
    width: 45%;
`;

type TechnicalRiderState = {
    title: string;
    description: string[];
};

const technicalRiderList: TechnicalRiderState[] = [
    {
        title: 'Loudspeakers',
        description: [
            'Acoustic system BELL Top 600W x 2',
            'Acoustic system BELL Mid 600W x 2',
            'Acoustic system BELL Sub 1000W x 2',
            'Front monitor Yamaha SM12V 300w x 2',
            'Backside monitor Dynacord 500W x 2',
        ],
    },
    {
        title: 'Amplifier',
        description: ['Acoustic system BELL Top 600W x 2', 'Acoustic system BELL Mid 600W x 2'],
    },
    {
        title: 'FOH',
        description: [
            'Acoustic system BELL Top 600W x 2',
            'Acoustic system BELL Mid 600W x 2',
            'Acoustic system BELL Sub 1000W x 2',
            'Front monitor Yamaha SM12V 300w x 2',
        ],
    },
    {
        title: 'Backline',
        description: [
            'Acoustic system BELL Top 600W x 2',
            'Acoustic system BELL Mid 600W x 2',
            'Acoustic system BELL Sub 1000W x 2',
            'Front monitor Yamaha SM12V 300w x 2',
            'Backside monitor Dynacord 500W x 2',
        ],
    },
    {
        title: 'Microphone set',
        description: [
            'Acoustic system BELL Top 600W x 2',
            'Acoustic system BELL Mid 600W x 2',
            'Acoustic system BELL Sub 1000W x 2',
        ],
    },
    {
        title: 'DJ equipment',
        description: [
            'Acoustic system BELL Top 600W x 2',
            'Acoustic system BELL Mid 600W x 2',
            'Acoustic system BELL Sub 1000W x 2',
            'Front monitor Yamaha SM12V 300w x 2',
            'Backside monitor Dynacord 500W x 2',
        ],
    },
];

export const TechnicalRiderList: FC = () => (
    <Container>
        <RetractableBlocks
            descriptionBlocks={technicalRiderList.map(({ title, description }) => ({
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
