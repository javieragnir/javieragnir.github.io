import styled from 'styled-components';

export const StyledProjects = styled.div`
  padding: 0px 80px 40px;
  margin-bottom: 20px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.white};

  h2 {
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
