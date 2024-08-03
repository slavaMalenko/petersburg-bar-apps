import type { ReactNode, FC } from 'react';

import { animationBlock, animationVariants } from '@petersburg-bar/common-ui';

import { Container, InfoBlock, InfoBlockDescription, InfoBlockDivider, InfoBlockTitle } from './styles';

const { appearanceOnTheLeft } = animationVariants;

type InfoItem = { title: string; description: string; dividingLine?: boolean };

const info: InfoItem[] = [
    {
        title: 'Адрес',
        description: 'Набережная реки Фонтанки, 90 (вход в арке с белыми колоннами)',
    },
    {
        title: 'Телефон',
        description: '+7 (812) 713-1945',
    },
    {
        title: 'Режим работы',
        description: 'Ежедневно с 12:00 до 06:00',
        dividingLine: true,
    },
    {
        title: 'Директор',
        description: 'Лидия Эмильевна, +7(921) 963-55-50',
    },
    {
        title: 'Арт-директор',
        description: 'Илиния Ионашко, +7(981) 989-43-30',
    },
];

const ContactsInfo: FC = () => {
    const getAnimateBlock: (args: Omit<animationBlock.TAnimateBlock, 'animation'>) => ReactNode = ({
        block,
        custom,
        children,
    }) =>
        animationBlock.getAnimateBlock({
            block,
            custom,
            children,
            animation: appearanceOnTheLeft(),
        });

    return (
        <Container initial="hidden" viewport={{ amount: 0.1 }} whileInView="visible">
            {info.map(({ title, description, dividingLine }: InfoItem, index) => (
                <InfoBlock key={`${description} ${index}`}>
                    {getAnimateBlock({
                        block: InfoBlockTitle,
                        custom: index,
                        children: title,
                    })}
                    {getAnimateBlock({
                        block: InfoBlockDescription,
                        custom: index,
                        children: description,
                    })}
                    {dividingLine &&
                        getAnimateBlock({
                            block: InfoBlockDivider,
                            custom: index,
                        })}
                </InfoBlock>
            ))}
        </Container>
    );
};

export { ContactsInfo };
