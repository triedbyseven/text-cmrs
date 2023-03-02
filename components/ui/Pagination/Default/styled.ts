import styled from 'styled-components';

const Styled = () => {};

const Container = styled.div`
  position: relative;
  max-width: 328px;
  width: 100%;
  height: 36px;
  background-color: #F0F3F5;
  border-radius: 14px;
`;

const Item = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 100%;
  cursor: pointer;
  transition: background-color 0.2s ease;
  /* Resets */
  background: transparent;
  border: none;
  margin: 0;
  padding: 0;

  :hover {
    background-color: #EBEEF0;
  }

  &:first-child:hover {
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    background-color: #EBEEF0;
  }

  &:last-child:hover {
    border-top-right-radius: 14px;
    border-bottom-right-radius: 14px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    background-color: #EBEEF0;
  }
`;

const Cursor = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px; 
  height: 36px;
  color: #FFF;
  background-color: #0072F5; 
  box-shadow: 0 4px 14px 0 #5EA2EF;
  border-radius: 33%;
`;



Styled.Container = Container;
Styled.Item = Item;
Styled.Cursor = Cursor;

export default Styled;
