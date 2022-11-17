import styled from 'styled-components';

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  & > div,
  & > ul {
    flex: 1;
  }
`;

export default FlexColumn;
