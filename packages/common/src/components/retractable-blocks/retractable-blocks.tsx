import type { FC, ReactNode } from 'react';
import { useState, memo } from 'react';

import { motion } from 'framer-motion';

import { MRetractableBlock } from './retractable-block';

export type TRetractableBlock = {
    title: string;
    description: string | ReactNode;
};

interface IRetractableBlocks {
    descriptionBlocks: TRetractableBlock[];
    localStorageKey?: string;
}
export const RetractableBlocks: FC<IRetractableBlocks> = memo(({ descriptionBlocks, localStorageKey }) => {
    const [openBlockIndex, setOpenBlockIndex] = useState<number>(
        (localStorageKey && +localStorage.getItem(localStorageKey)) || 0,
    );
    const setOpenBlockIndexAndSave = (idx: number) => {
        setOpenBlockIndex(idx);
        localStorageKey && localStorage.setItem(localStorageKey, idx.toString());
    };

    return (
        <motion.div initial="hidden" whileInView="visible">
            {descriptionBlocks.map(({ title, description }, index) => (
                <MRetractableBlock
                    key={`${title} ${index}`}
                    custom={index}
                    description={description}
                    index={index}
                    isOpenBlock={index === openBlockIndex}
                    setOpenBlockIndex={setOpenBlockIndexAndSave}
                    title={title}
                />
            ))}
        </motion.div>
    );
});
