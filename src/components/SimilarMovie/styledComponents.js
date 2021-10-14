import styled from 'styled-components'

export const Movie = styled.img`
  height: 170px;
  width: 255px;
  margin-top: 30px;
  margin-bottom: 30px;
  border-radius: 8px;
  margin-right: 30px;
  &:hover {
    transform: scale(1.1);
  }
  cursor: pointer;
  @media screen and (max-width: 360px) {
    height: 64px;
    width: 90px;
    margin-top: 15px;
    margin-bottom: 15px;
    border-radius: 8px;
    margin-right: 15px;
  }
`
