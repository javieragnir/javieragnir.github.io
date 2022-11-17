import styled from 'styled-components';

export const StyledSkillSection = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px 0;

  h3 {
    margin: 10px 0;
  }

  ul {
    padding: 0;
    list-style-type: none;
  }

  & + & {
    border-left: 1px solid black;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;

    & + & {
      border-left: none;
    }
  }
`;
