import styled from 'styled-components';
import { motion } from 'framer-motion';

const Styled = () => { };

const Container = styled.button`
  display: block;
  position: relative;
  overflow: hidden;
  width: 100px;
  height: 40px;
  background-color: #cee4fe;
  border: none;
  margin: 0 0;
  border-radius: 14px;
  cursor: pointer;
`;

const Overlay = styled.div`
  opacity: 0;
  z-index: 10;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: black;
`;

const Label = styled.span`
  font-size: 16px;
  color: #0072f5;
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
  background-color: #FFF;
  border-radius: 100px;
`;

Styled.Container = Container;
Styled.Overlay = Overlay;
Styled.Label = Label;
Styled.Ripple = Ripple;

export default Styled;
