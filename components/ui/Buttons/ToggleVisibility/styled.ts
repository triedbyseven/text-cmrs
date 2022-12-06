import { motion } from 'framer-motion';
import styled from 'styled-components';

const Styled = () => {};

const Container = styled.span`
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  width: 40px;
  padding: 0px 8px;
`;

const Overlay = styled.div`
  z-index: 1;
  position: relative;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

interface StyledRippleProps {
  x: number;
  y: number;
};

const Ripple = styled(motion.span) <StyledRippleProps>`
  z-index: 0;
  position: absolute;
  opacity: 0.25;
  top: ${props => `${props.y - (35 / 2)}px`};
  left: ${props => `${props.x - (35 / 2)}px`};
  width: 35px;
  height: 35px;
  background-color: #000;
  border-radius: 100px;
`;

Styled.Container = Container;
Styled.Overlay = Overlay;
Styled.Ripple = Ripple;

export default Styled;
