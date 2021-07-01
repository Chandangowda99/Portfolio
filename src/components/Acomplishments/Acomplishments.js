import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 1, text: 'Machine learning Project'},
  { number: 3, text: 'React Projects', },
  { number: 1, text: 'Static Learning Website', },
  { number: 2, text: 'HackerRank Certificates', }
];


const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Acomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key = {index}>
            <BoxNum>{card.number}</BoxNum>
            <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
