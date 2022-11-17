import styled from 'styled-components';

export const StyledFooter = styled.div`
  background-color: ${({ theme }) => theme.colors.footer};
  padding: 20px 40px;
  margin-top: auto;

  * {
    color: ${({ theme }) => theme.colors.white}
  }
`;
