import Styled from './styled';
import { Heading3Props } from './interfaces';

const Heading3: React.FC<Heading3Props> = (props): React.ReactElement => {
  return (
    <Styled.Container>{ props.text }</Styled.Container>
  );
};

export default Heading3;