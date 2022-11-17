import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { IoMail } from 'react-icons/io5';
import { StyledSocialIcons } from './styles/SocialIcons.styled';

export default function SocialIcons() {
  return (
    <StyledSocialIcons>
      <li>
        <a href="https://github.com/javieragnir/">
          <BsGithub size={30} />
        </a>
      </li>
      <li>
        <a href="https://linkedin.com">
          <BsLinkedin size={30} />
        </a>
      </li>
      <li>
        <a href="mailto:jjr.agnir@gmail.com">
          <IoMail size={30} />
        </a>
      </li>
    </StyledSocialIcons>
  );
}
