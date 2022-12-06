import React, { useCallback, useState } from 'react';
import Icons from '../../Icons';
import { ClearPasswordProps, ClearPasswordState } from './interfaces';
import Styled from './styled';
import { v4 as uuidv4 } from 'uuid';


const ClearPassword: React.FC<ClearPasswordProps> = (props): React.ReactElement => {
  const [rippleNodes, setRippleNodes] = useState<ClearPasswordState>([]);

  const onClickHandler = useCallback((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const rippleX = event.nativeEvent.offsetX;
    const rippleY = event.nativeEvent.offsetY;

    setRippleNodes(prevState => ([
      ...prevState,
      { id: uuidv4(), isRippling: true, x: rippleX, y: rippleY }
    ]));

    props.onClearPassword();
  }, []);

  const onAnimationCompleteHandler = (id: string) => {
    return () => {
      setRippleNodes(prevState => prevState.filter(ripple => ripple.id !== id));
    };
  };

  const enableToggleCursor = props.value ? 'pointer' : 'default';
  const enableClearInput = props.value ? onClickHandler : null

  return(
    <Styled.Container
      cursor={enableToggleCursor}
      onClick={enableClearInput}
    >
      {props.value ? (
        <Icons.XCircle />
      ) : null}
      <Styled.Overlay />
      {rippleNodes.map((ripple, index) => {
        return (
          <Styled.Ripple
            key={ripple.id}
            x={rippleNodes[index].x}
            y={rippleNodes[index].y}
            animate={{
              opacity: 0,
              scale: 20,
            }}
            transition={{
              duration: 1
            }}
            onAnimationComplete={onAnimationCompleteHandler(ripple.id)}
          />
        );
      })}
    </Styled.Container>
  );
};

export default ClearPassword;
