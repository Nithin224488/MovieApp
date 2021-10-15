import styled from 'styled-components'

export const MovieCardItem = styled.li`
  height: 170px;
  width: 255px;
  margin-bottom: 20px;
  &:hover {
    transform: scale(1.1);
  }
  @media screen and (max-width: 576px) {
    height: 100px;
    width: 90px;
    border-radius: 4px;
  }
`
export const MovieImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  @media screen and (max-width: 576px) {
    border-radius: 4px;
  }
`
