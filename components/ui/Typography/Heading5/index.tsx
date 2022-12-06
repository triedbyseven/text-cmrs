import Styled from './styled';
import { Heading5Props } from './interfaces';

const Heading5: React.FC<Heading5Props> = (props): React.ReactElement => {
  return (
    <Styled.Container>{ props.text }</Styled.Container>
  );
};

export default Heading5;