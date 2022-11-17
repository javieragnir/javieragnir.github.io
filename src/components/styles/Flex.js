import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  & > * {
    flex: 1;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;

export default Flex;
