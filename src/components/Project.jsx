import pokemonTradesPng from '../files/pokemon-trades.png';
import {
  StyledProject,
  Image,
  Overlay,
  Link,
  ButtonFlex,
  TextContainer,
} from './styles/Project.styled';

export default function Project() {
  return (
    <StyledProject>
      <Image src={pokemonTradesPng} alt="Project" />
      <Overlay>
        <TextContainer>
          <h3>Pokemon Trades</h3>
          <p>
            A full-featured social media app built with trading Pokemon in mind.
            Supports user creation, commenting, and more.
          </p>
        </TextContainer>
        <ButtonFlex>
          <Link href="https://github.com/javieragnir/pokemon-site">GitHub</Link>
          <Link href="https://pokemon-trades-frontend.fly.dev/">Live Site</Link>
        </ButtonFlex>
      </Overlay>
    </StyledProject>
  );
}
