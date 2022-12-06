import styled from 'styled-components';

const Styled = () => {};

interface StyledContainerProps {
  isFocused: boolean;
};

const Container = styled.div<StyledContainerProps>`
  display: inline-flex;
  width: 100%;
  height: 40px;
  transition: all 250ms ease;
  box-shadow: ${props => props.isFocused ? '0 2px 8px 2px rgba(104, 112, 108, 0.07), 0 2px 4px -1px rgba(104, 112, 108, 0.04)' : 'none'};
  transform: ${props => props.isFocused ? 'translateY(-3px)' : 'translateY(0px)' };
  background-color: #F0F3F5;
  border-radius: 0.75rem;
`;

const InnerContainer = styled.div`
flex-grow: 1;
  overflow: hidden;
  display: inline-flex;
  border-radius: 0.75rem;  
`;

const Label = styled.label`
flex-grow: 1;
  overflow: hidden;
  display: flex;
  height: 100%;
  border-radius: 0.75rem;
`;

const Title = styled.span`
  display: flex;
  align-items: center;
  height: 100%;
  color: #889096;
  background-color: #e6e8eb;
  padding: 0 12px;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  margin: 0 10px;
  background-color: transparent;
  &:focus {
    border: none;
    outline: 0;
  }
`;

Styled.Container = Container;
Styled.InnerContainer = InnerContainer;
Styled.Label = Label;
Styled.Title = Title;
Styled.Input = Input;

export default Styled;
