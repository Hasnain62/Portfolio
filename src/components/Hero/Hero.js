import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection , RightSection} from './HeroStyles';
import Image from 'next/image'

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>

         
          
         Mohammad Hasnain <br />
Mirza        </SectionTitle>
        <SectionText>
I am a student at the University of Saskatchewan <br/> I am expecting to graduate in 2023. I have done projects stand alone and in groups, this portfolio has some of my work.         </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>

      {/* <RightSection>

      <Image
            src = "/profile.jpeg"
            layout= "fill"
            sizes="(min-width: 75em) 33vw,
            (min-width: 48em) 50vw,
            100vw"

          />
      </RightSection> */}
    </Section>
  </>
);

export default Hero;