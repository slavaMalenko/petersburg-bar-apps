import type { FC } from 'react';
import { memo } from 'react';

import { Preview, PreviewConcerts, PreviewImg } from './styles';

type Concerts = { src?: string }[];

const prevConcertsMock: Concerts = [
    { src: 'https://i.ibb.co/r7gj2sc/Rectangle-32.png' },
    { src: 'https://i.ibb.co/KbqC2dL/Rectangle-33.png' },
    { src: 'https://i.ibb.co/fS8wnLv/Rectangle-34.png' },
    { src: 'https://i.ibb.co/RCrs33g/Rectangle-35.png' },
];
const soonConcertsMock: Concerts = [
    { src: 'https://i.ibb.co/RCrs33g/Rectangle-35.png' },
    { src: 'https://i.ibb.co/r7gj2sc/Rectangle-32.png' },
    { src: 'https://i.ibb.co/KbqC2dL/Rectangle-33.png' },
    { src: 'https://i.ibb.co/fS8wnLv/Rectangle-34.png' },
];
const concerts = {
    prevConcerts: prevConcertsMock,
    soonConcerts: soonConcertsMock,
};

let count = 0;
const getСoordinateValue: () => {
    getX: (index) => number;
} = () => ({
    getX: (index) => (index % 2 === 0 ? (count % 3 === 0 ? 300 : -300) : count % 2 === 0 ? -300 : 300),
});

export const PreviewConcertsComponent: FC<{
    concertsType: string;
}> = memo(({ concertsType }) => {
    count = count + 1;

    return (
        <PreviewConcerts>
            {concerts[concertsType as keyof typeof concerts].map(({ src }, index) => (
                <Preview key={`${src}${index}`}>
                    <PreviewImg
                        animate={{ x: 0, y: 0 }}
                        initial={{
                            x: getСoordinateValue().getX(index),
                        }}
                        src={src}
                        transition={{ duration: 0.2 }}
                        whileHover={{ scale: 1.03 }}
                    />
                </Preview>
            ))}
        </PreviewConcerts>
    );
});
