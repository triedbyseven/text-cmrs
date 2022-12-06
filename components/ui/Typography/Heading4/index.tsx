import Styled from './styled';
import { Heading4Props } from './interfaces';

const Heading4: React.FC<Heading4Props> = (props): React.ReactElement => {
  return (
    <Styled.Container>{ props.text }</Styled.Container>
  );
};

export default Heading4;