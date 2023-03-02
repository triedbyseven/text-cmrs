import styled from 'styled-components';

const Styled = () => {};

const Container = styled.div`
  display: inline-block;
  background-color: #D9FBE8;
  box-shadow: rgb(0 0 0 / 5%) 1px 2px 5px 0px;
  border-radius: 14px;
  margin: 0px 2px;
`;

const Text = styled.span`
  display: inline-block;
  font-size: 10px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  color: #14A452;
  padding: 4px 6px;
`;

Styled.Container = Container;
Styled.Text = Text;

export default Styled;
