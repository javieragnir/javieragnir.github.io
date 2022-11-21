import styled from 'styled-components';

export const StyledFinalWords = styled.div`
  padding: 40px 40px 80px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.projects};

  * {
    color: ${({ theme }) => theme.colors.white};
  }

  & > h2 {
    margin-bottom: 20px;
  }
`;