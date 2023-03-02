import React, { useState } from 'react';
import Icons from '../../Icons';
import { DeleteProps, DeleteState } from './interfaces';
import Animations from '../../../animations';
import Styled from './styled';

const Delete: React.FC<DeleteProps> = (props): React.ReactElement => {
  const [state, setState] = useState<DeleteState>({
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
      <Icons.Trash /> 
    </Styled.Container>
  );
};

export default Delete;
