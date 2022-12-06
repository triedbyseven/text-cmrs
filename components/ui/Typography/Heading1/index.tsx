import Styled from './styled';
import { Heading1Props } from './interfaces';

const Heading1: React.FC<Heading1Props> = (props): React.ReactElement => {
  return (
    <Styled.Container>{ props.text }</Styled.Container>
  );
};

export default Heading1;