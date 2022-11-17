import styled from 'styled-components';

const StyledSkills = styled.div`
  margin: 0 80px;
  padding: 20px 0;
  margin-top: 80px;
  margin-bottom: 20px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  border-radius: 8px;

  & > h3,
  & > p {
    text-align: center;
    margin: 0 20px;
  }

  p {
    font-size: 0.95em;
  }
`;

export default StyledSkills;
