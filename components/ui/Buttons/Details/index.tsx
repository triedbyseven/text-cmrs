import React, { useState } from 'react';
import Icons from '../../Icons';
import { DetailsProps, DetailsState } from './interfaces';
import Animations from '../../../animations';
import Styled from './styled';

const Details: React.FC<DetailsProps> = (props): React.ReactElement => {
  const [state, setState] = useState<DetailsState>({
    isMouseOver: false
  });

  const onMouseEnterHandler = (): void => {
    setState({ isMouseOver: true });
  };

  const onMouseLeaveHandler = (): void => {
    setState({ isMouseOver: false });
  };

  return(
    <Styled.Container
      onClick={ props.onClick }
      onMouseEnter={ onMouseEnterHandler }
      onMouseLeave={ onMouseLeaveHandler }
    >
      { !state.isMouseOver ? null : (
        <Animations.SlideY>
          <Styled.Bubble>
            <Styled.Caret />
            <Styled.Text>{ props.label }</Styled.Text>
          </Styled.Bubble>
        </Animations.SlideY>
      ) }
      <Icons.Eye /> 
    </Styled.Container>
  );
};

export default Details;
