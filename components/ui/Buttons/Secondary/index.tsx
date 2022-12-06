import React, { memo, useCallback, useState } from 'react';
import { SecondaryProps, SecondaryState } from './interfaces';
import Styled from './styled';
import { v4 as uuidv4 } from 'uuid';

const Secondary: React.FC<SecondaryProps> = (props): React.ReactElement => {
  const [rippleNodes, setRippleNodes] = useState<SecondaryState>([]);

  const onClickHandler = useCallback((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const rippleX = event.nativeEvent.offsetX;
    const rippleY = event.nativeEvent.offsetY;

    setRippleNodes(prevState => ([
      ...prevState,
      { id: uuidv4(), isRippling: true, x: rippleX, y: rippleY }
    ]));

   props.onClick(); 
  }, [props.onClick]);

  const onAnimationCompleteHandler = (id: string) => {
    return () => {
      setRippleNodes(prevState => prevState.filter(ripple => ripple.id !== id));
    };
  };

  return (
    <Styled.Container onClick={onClickHandler}>
      <Styled.Label> {props.label} </Styled.Label>
      <Styled.Overlay />
      {rippleNodes.map((ripple, index) => {
        return (
          <Styled.Ripple
            key={ripple.id}
            x={rippleNodes[index].x}
            y={rippleNodes[index].y}
            animate={{
              opacity: 0,
              scale: 20
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

export default memo(Secondary);