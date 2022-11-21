import styled from 'styled-components';

const StyledSkills = styled.div`
  padding: 20px 0;
  margin-top: 80px;
  margin-bottom: 80px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  border-radius: 8px;
  width: 100%;
  max-width: 1000px;
  background-color: ${({ theme }) => theme.colors.white};


  & > h2,
  & > p {
    text-align: center;
    margin: 0 20px;
  }

  p {
    font-size: 0.95em;
  }
`;

export const SkillsContainer = styled.div`
  padding: 0 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.skills};
`

export default StyledSkills;
