import Heading1 from './Heading1';
import { Heading1Props } from './Heading1/interfaces';
import Heading2 from './Heading2';
import { Heading2Props } from './Heading2/interfaces';
import Heading3 from './Heading3';
import { Heading3Props } from './Heading3/interfaces';
import Heading4 from './Heading4';
import { Heading4Props } from './Heading4/interfaces';
import Heading5 from './Heading5';
import { Heading5Props } from './Heading5/interfaces';
import Heading6 from './Heading6';
import { Heading6Props } from './Heading6/interfaces';

interface TypographyComponents {
  H1: React.FC<Heading1Props>;
  H2: React.FC<Heading2Props>;
  H3: React.FC<Heading3Props>;
  H4: React.FC<Heading4Props>;
  H5: React.FC<Heading5Props>;
  H6: React.FC<Heading6Props>;
};

const Typography: TypographyComponents = (): void => {};

Typography.H1 = Heading1;
Typography.H2 = Heading2;
Typography.H3 = Heading3;
Typography.H4 = Heading4;
Typography.H5 = Heading5;
Typography.H6 = Heading6;

export default Typography;