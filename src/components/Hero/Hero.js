import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Hi, I am <strong style= {{color: 'lightblue'}}>Chandan B</strong>, I am a computer enthusiast and a passionate coder oriented towards real life problem solving
      </SectionText>
      <Button onClick={() => window.location = "https://mail.google.com/mail/u/1/#inbox"}>Learn more</Button>
    </LeftSection>
  </Section>
);

export default Hero;