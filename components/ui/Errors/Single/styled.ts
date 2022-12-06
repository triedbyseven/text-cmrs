import styled from 'styled-components';

const Styled = () => {};

const Container = styled.div`
  width: 100%;
  border: 1px solid red;
  border-radius: 14px;
  padding: 10px 20px;
`;

const MessageText = styled.div`
  color: red;
`;

Styled.Container = Container;
Styled.MessageText = MessageText;

export default Styled;
