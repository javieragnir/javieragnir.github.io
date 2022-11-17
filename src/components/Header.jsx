import SocialIcons from './SocialIcons';
import { StyledHeader, HeaderContainer } from './styles/Header.styled';

export default function Header() {
  return (
    <StyledHeader>
      <HeaderContainer>
        <h2>Javier Agnir</h2>
        <SocialIcons />
      </HeaderContainer>
    </StyledHeader>
  );
}
