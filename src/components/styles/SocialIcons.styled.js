import styled from 'styled-components';

export const StyledSocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;

  a {
    color: #fdfdfd;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }

  & > li {
    display: flex;
    align-items: center;
  }

  svg {
    fill: ${({ theme }) => theme.colors.white};
    transition: 0.25s;

    &:hover,
    &:focus {
    fill: #cccccc;
    }
  }
`;
