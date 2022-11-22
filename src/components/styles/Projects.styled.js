import styled from 'styled-components';

export const StyledProjects = styled.div`
  padding: 80px 80px 40px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.projects};
  
  h1,
  p {
    color: ${({ theme }) => theme.colors.white};
  }

  & > p {
    margin-bottom: 70px;
  }

  h1 {
    margin-bottom: 10px;
  }
`;

export const ProjectFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  gap: 30px;

  & > * {
    flex: 1 1 0;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;
