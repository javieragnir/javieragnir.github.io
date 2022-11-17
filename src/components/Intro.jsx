import { StyledIntro, Image, IntroContainer } from './styles/Intro.styled';

function Intro() {
  return (
    <StyledIntro>
      <IntroContainer>
        <div>
          <h1>Hi! I&apos;m Javier.</h1>
          <p>
            I am an aspiring software engineer from the Philippines.
          </p>
        </div>
        <Image src="https://people.com/thmb/JGjxumyykHNuBoeyuELz33P2uHY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(719x309:721x311)/rick-astley-recreation-never-gonna-give-you-up-081922-1-909d277568c34a599c27fa7503ce7a4c.jpg" />
      </IntroContainer>
    </StyledIntro>
  );
}

export default Intro;
