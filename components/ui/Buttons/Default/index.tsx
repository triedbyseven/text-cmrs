import React, { memo, useCallback, useState } from 'react';
import { DefaultProps, DefaultState } from './interfaces';
import Styled from './styled';
import { v4 as uuidv4 } from 'uuid';
import Loaders from '../../Loaders';
import useWindowSize from '../../../../hooks/useWIndowDimensions';

const Default: React.FC<DefaultProps> = (props): React.ReactElement | null => {
  const [rippleNodes, setRippleNodes] = useState<DefaultState>([]);
  const { width, height } = useWindowSize();

  const onClickHandler = useCallback((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const rippleX = event.nativeEvent.offsetX;
    const rippleY = event.nativeEvent.offsetY;

    setRippleNodes(prevState => ([
      ...prevState,
      { id: uuidv4(), isRippling: true, x: rippleX, y: rippleY }
    ]));

    props.onSubmit();
  }, [props.onSubmit]);

  const onAnimationCompleteHandler = (id: string) => {
    return () => {
      setRippleNodes( prevState => prevState.filter( ripple => ripple.id !== id) );
    };
  };

  if (!width || !height) return null;

  return (
    <Styled.Container disabled={props.disabled} onClick={onClickHandler}>
      {props.showLoader ? <Loaders.Dots /> : <Styled.Label> {props.label} </Styled.Label>}
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

export default memo(Default);
