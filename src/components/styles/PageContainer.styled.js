import styled from 'styled-components';

export const StyledPageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.body};
`;
