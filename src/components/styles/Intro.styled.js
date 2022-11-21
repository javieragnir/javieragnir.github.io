import styled from 'styled-components';

export const StyledIntro = styled.div`
  padding: 80px;
  margin-top: 40px;
  margin-bottom: 40px;

  h2 {
    margin-bottom: 10px;
  }
`;

export const IntroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Image = styled.img`
  width: 375px;
  margin-left: 40px;
  border: 1px solid black;
  box-shadow: 10px 10px 0px 0px rgba(0,0,0,0.75);
  -webkit-box-shadow: 10px 10px 0px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 10px 0px 0px rgba(0,0,0,0.75);

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 40px 0 30px;
  }
`;
