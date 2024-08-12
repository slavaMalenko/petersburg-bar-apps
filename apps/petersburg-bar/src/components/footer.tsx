import type { FC } from 'react';

import { Dividing, commonStyles, flexStyles, textStyles } from '@petersburg-bar/common';
import styled from 'styled-components';

const { displayFlex, justifySpaceBetween } = flexStyles;
const { fontFamilySofiaSansSemiCondensed, colorWhite } = textStyles;
const FooterInfo = styled.div`
    ${fontFamilySofiaSansSemiCondensed}
    ${colorWhite}
    ${displayFlex}
    ${justifySpaceBetween}
    ${commonStyles.selectNone}
    padding: 10px 0 20px;
`;
const Footer: FC = () => (
    <footer>
        <Dividing />

        <FooterInfo>
            <span>Copyright © 2022. Все права защищены.</span>
            <span>Разработано slavuti.ch</span>
        </FooterInfo>
    </footer>
);

export { Footer };
