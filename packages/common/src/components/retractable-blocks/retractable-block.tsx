import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle } from 'react';

import { motion } from 'framer-motion';

import Vector from './img/vector.png';
import { Arrow, Container, Description, Title, TitleBlock } from './styles';

import type { TRetractableBlock } from './retractable-blocks';

interface IRetractableBlock extends TRetractableBlock {
    isOpenBlock: boolean;
    setOpenBlockIndex: React.Dispatch<React.SetStateAction<number>>;
    index: number;
}

const RetractableBlock = forwardRef<HTMLDivElement, IRetractableBlock>(
    ({ title, description, isOpenBlock, setOpenBlockIndex, index }, initRef) => {
        const ref = useRef<HTMLDivElement>();

        useImperativeHandle(initRef, () => ref.current);

        const [height, setHeight] = useState<number | undefined>();

        useEffect(() => {
            if (ref.current) setHeight(ref?.current?.scrollHeight);
        }, []);

        return (
            <Container ref={ref} height={height} isOpenBlock={isOpenBlock}>
                <TitleBlock
                    onClick={() => {
                        setOpenBlockIndex(index);
                    }}
                >
                    <Title>{title}</Title>
                    <Arrow isOpenBlock={isOpenBlock} src={Vector as string} />
                </TitleBlock>
                <Description>{description}</Description>
            </Container>
        );
    },
);

export { RetractableBlock };
export const MRetractableBlock = motion(RetractableBlock);
