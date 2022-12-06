import React, { useCallback, useState } from 'react';
import Icons from '../../Icons';
import { ToggleVisibilityProps, ToggleVisibilityState } from './interfaces';
import Styled from './styled';
import { v4 as uuidv4 } from 'uuid';


const ToggleVisibility: React.FC<ToggleVisibilityProps> = (props): React.ReactElement => {
  const [rippleNodes, setRippleNodes] = useState<ToggleVisibilityState>([]);

  const onClickHandler = useCallback((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const rippleX = event.nativeEvent.offsetX;
    const rippleY = event.nativeEvent.offsetY;

    setRippleNodes(prevState => ([
      ...prevState,
      { id: uuidv4(), isRippling: true, x: rippleX, y: rippleY }
    ]));

    props.onTogglePassword();
  }, []);

  const onAnimationCompleteHandler = (id: string) => {
    return () => {
      setRippleNodes(prevState => prevState.filter(ripple => ripple.id !== id));
    };
  };

  return(
    <Styled.Container onClick={onClickHandler}>
      {!props.showPassword ? <Icons.EyeSlash /> : <Icons.Eye />}
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

export default ToggleVisibility;
