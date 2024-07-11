import React, { useState, useRef, useEffect, useCallback, forwardRef, useImperativeHandle } from 'react';

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

        const [contentHeight, setContentHeight] = useState(0);
        const [height, setHeight] = useState<number | undefined>();
        const onToggleHeight = useCallback(() => {
            setHeight(contentHeight);
        }, [contentHeight]);

        useEffect(() => {
            if (ref.current) setContentHeight(ref?.current?.scrollHeight);
        }, []);

        return (
            <Container ref={ref} height={height} isOpenBlock={isOpenBlock}>
                <TitleBlock
                    onClick={() => {
                        setOpenBlockIndex(index);
                        onToggleHeight();
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
