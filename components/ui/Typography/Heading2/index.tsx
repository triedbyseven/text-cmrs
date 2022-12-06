import Styled from './styled';
import { Heading2Props } from './interfaces';

const Heading2: React.FC<Heading2Props> = (props): React.ReactElement => {
  return (
    <Styled.Container>{ props.text }</Styled.Container>
  );
};

export default Heading2;