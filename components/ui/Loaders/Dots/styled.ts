import { motion } from 'framer-motion';
import styled from 'styled-components';

const Styled = () => {};

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Dot = styled(motion.span)`
  width: 4px;
  height: 4px;
  margin: 0 4px;
  /* background-color: #7D868B; */
  background-color: #FFF;
  border-radius: 100px;
`;

Styled.Container = Container;
Styled.Dot = Dot;

export default Styled;
