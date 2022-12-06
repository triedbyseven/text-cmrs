import styled from 'styled-components';
import { motion } from 'framer-motion';

const Styled = () => {};

const Container = styled.button`
  display: block;
  position: relative;
  overflow: hidden;
  max-width: 192px;
  width: 100%;
  height: 44px;
  background-color: ${props => props.theme.colors.primary};
  border: none;
  padding: 0 14px;
  margin: 0;
  border-radius: 28px;
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
  font-size: 18px;
  font-family: 'Inter-Regular';
  color: #FFF;
`;

interface StyledRippleProps {
  x: number;
  y: number;
};

const Ripple = styled(motion.span)<StyledRippleProps>`
  position: absolute;
  opacity: 0.25;
  top: ${props => `${props.y - 15}px`};
  left: ${props => `${props.x - 15.5}px`};
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
