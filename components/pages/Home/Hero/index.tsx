import React from 'react';
import useWindowSize from '../../../../hooks/useWIndowDimensions';
import Buttons from '../../../ui/Buttons';
import useHero from './hook';
import { HeroProps } from './interfaces';
import Styled from './styled';

const Hero: React.FC<HeroProps> = (): React.ReactElement => {
  const { height } = useWindowSize();
  const { getStartedOnClickHandler } = useHero()

  return(
    <Styled.Container height={`${height}px`}>
      <Styled.BackgroundImageContainer>
        <Styled.BackgroundImage src={'./background_hero.webp'} />
        <Styled.BackgroundImageOverlay />
      </Styled.BackgroundImageContainer>

      <Styled.ContentContainer>
        <Styled.ContentLeftColumn>
          <Styled.Heading>An <Styled.WordGradient>amazing</Styled.WordGradient> text CRM that helps you <Styled.WordGradient>grow</Styled.WordGradient> your business.</Styled.Heading>
          <Buttons.Default
            label='Get Started' 
            onSubmit={getStartedOnClickHandler}
            showLoader={false}
            disabled={false}
          />
        </Styled.ContentLeftColumn>
      </Styled.ContentContainer> 
    </Styled.Container>
  );
};

export default Hero;
