import styled from 'styled-components';

const Styled = () => {};

const Container = styled.button`
  position: relative;
  display: flex;
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
  align-items: flex-end;
  justify-content: flex-end;
  border-radius: 28px;
  cursor: pointer;
`;

const Bubble = styled.div`
  z-index: 10;
  position: absolute;
  display: flex;
  justify-content: center;
  left: 50%;
  top: -100%;
  transform: translate(-50%,-50%);
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 20px;
  background-color: #FFF;
  box-shadow: 0 12px 20px 6px rgb(104 112 118 / 0.08);
`;

const Caret = styled.div`
  position: absolute;
  bottom: -10px;
  border-top: 5px solid #FFF; 
  border-bottom: 5px solid transparent; 
  border-left: 5px solid transparent; 
  border-right: 5px solid transparent; 
`;

const Text = styled.p`
  position: relative;
  font-size: 15px;
  width: max-content;
  margin: 0;
  padding: 8px 0;
`;

Styled.Container = Container;
Styled.Bubble = Bubble;
Styled.Caret = Caret;
Styled.Text = Text;

export default Styled;
