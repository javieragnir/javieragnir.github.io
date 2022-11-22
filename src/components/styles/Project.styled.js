import styled from 'styled-components';

export const StyledProject = styled.div`
  position: relative;
  max-width: 1000px;
`;

export const Image = styled.img`
  display: block;
  border-radius: 8px;
  width: 100%;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 1;
  transition: 0.25s;

  &:hover {
    opacity: 1;
  }
`;

export const Link = styled.a`
  display: inline-block;
  border: none;
  padding: 0.5em 1em;
  width: 120px;
  margin: 0;
  text-decoration: none;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.header};
  border-radius: 9999px;
  color: #ffffff;
  font-family: sans-serif;
  font-size: 0.85em;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, 
              transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.header};
  }

  &:focus {
      outline: 1px solid ${({ theme }) => theme.colors.header};
      outline-offset: -4px;
  }

  &:active {
      transform: scale(0.99);
  }
`;

export const ButtonFlex = styled.div`
  display: flex;
  gap: 15px;
`;

export const TextContainer = styled.div`
  text-align: center;
  padding: 0px 40px;
  margin-bottom: 20px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 10px 20px;
    margin-bottom: 10px;
  }

  & > h3 {
    margin-bottom: 10px;
  }

  & > p {
    font-size: 1em;
  }
`;
