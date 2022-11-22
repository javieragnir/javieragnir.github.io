import { StyledIntro, Image, IntroContainer, IntroText } from './styles/Intro.styled';
import myselfJpg from '../files/myself.jpg'

function Intro() {
  return (
    <StyledIntro>
      <IntroContainer>
        <IntroText>
          <h1>Hi! I&apos;m Javier.</h1>
          <p>
            I&apos;m an aspiring software engineer from the Philippines. I enjoy building
            new things, whether they be on the frontend or backend.
          </p>
        </IntroText>
        <Image src={myselfJpg} />
      </IntroContainer>
    </StyledIntro>
  );
}

export default Intro;
