import styled from 'styled-components';

const StyledSkills = styled.div`
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
    margin: 0 20px;
  }

  p {
    text-align: center;
    font-size: 0.95em;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    h3 {
      text-align: center;
    }
  }
`;

export default StyledSkills;
