import React, { useState } from 'react';
import Icons from '../../Icons';
import { EditProps, EditState } from './interfaces';
import Animations from '../../../animations';
import Styled from './styled';

const Edit: React.FC<EditProps> = (props): React.ReactElement => {
  const [state, setState] = useState<EditState>({
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
      <Icons.PencilSquare /> 
    </Styled.Container>
  );
};

export default Edit;
