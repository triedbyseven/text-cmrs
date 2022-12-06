import React from 'react';
import useWindowSize from '../../../hooks/useWIndowDimensions';

export interface WindowDimensionsProps {
  resize: boolean;
  children: React.ReactNode;
};

const WindowDimensions: React.FC<WindowDimensionsProps> = (props): React.ReactElement => {
  const { width, height } = useWindowSize(props.resize);

  const WhitePlaceholder: React.FC = (): React.ReactElement => {
    return (
      <div style={{
        zIndex: 9999,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#FFF'
      }}>
      </div>
    );
  };

  return (
    <>
      { !width || !height ?
        <WhitePlaceholder /> : null }
      <div className='THEONE' style={{ maxWidth: width, width: '100%', height: height }}>
        {props.children}
      </div>
    </>
  )
};

export default WindowDimensions;