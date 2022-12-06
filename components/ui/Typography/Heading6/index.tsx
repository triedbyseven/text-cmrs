import Styled from './styled';
import { Heading6Props } from './interfaces';

const Heading6: React.FC<Heading6Props> = (props): React.ReactElement => {
  return (
    <Styled.Container>{ props.text }</Styled.Container>
  );
};

export default Heading6;