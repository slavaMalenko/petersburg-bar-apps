import type { FC } from 'react';

import { MTitle, MWhitePlate, animationVariants } from '@petersburg-bar/common-ui';

import { ContactsInfo } from './contactsInfo';
import { ContactsContainer, ContactsMap, Section, WhitePlateStyles } from './styles';

const { appearanceOnTheTop } = animationVariants;

const Contacts: FC = () => (
    <Section initial="hidden" viewport={{ amount: 0.15 }} whileInView="visible">
        <MWhitePlate
            scrollToTitle
            $commonStyles={WhitePlateStyles}
            custom={1}
            title="Top “Manhattan” place"
            variants={appearanceOnTheTop()}
        />
        <MTitle custom={2} text="Контакты" variants={appearanceOnTheTop()} />

        <ContactsContainer>
            <ContactsInfo />
            <ContactsMap />
        </ContactsContainer>
    </Section>
);

export { Contacts };
