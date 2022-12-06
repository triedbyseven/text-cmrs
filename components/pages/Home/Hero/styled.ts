import styled from 'styled-components';

const Styled = () => {};

interface ContainerStyledProps {
  height: string;
};

const Container = styled.div<ContainerStyledProps>`
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
  height: ${props => props.height};
  margin-top: -124px;
`;

const BackgroundImageContainer = styled.div`
  overflow: hidden;
  z-index: 1;
  position: absolute;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;  
`;

const BackgroundImageOverlay = styled.div`
  z-index: 1;
  opacity: 0.75;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(255,255,255);
  background: linear-gradient(180deg, rgba(255,255,255,1) 80%, rgba(0,0,0,0) 100%);
`;

const ContentContainer = styled.div`
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 20px;
`;

const ContentLeftColumn = styled.div`
  max-width: 675px;
  width: 100%;
`;

const Heading = styled.h1`
  font-size: 54px;
  font-family: 'Inter-Bold';
  letter-spacing: -0.05em;
  line-height: 1.2;
  color: #000;
  margin: 0 0 20px 0;
`;

const WordGradient = styled.span`
  background: linear-gradient(rgb(139,18,233) 25%, rgb(24,76,231) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

Styled.Container = Container;
Styled.BackgroundImageContainer = BackgroundImageContainer;
Styled.BackgroundImage = BackgroundImage;
Styled.BackgroundImageOverlay = BackgroundImageOverlay;
Styled.ContentContainer = ContentContainer;
Styled.ContentLeftColumn = ContentLeftColumn;
Styled.Heading = Heading;
Styled.WordGradient = WordGradient;

export default Styled;
