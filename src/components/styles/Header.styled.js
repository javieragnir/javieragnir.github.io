import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 20px 40px;

  h2 {
    color: ${({ theme }) => theme.colors.white}
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }
`;
