import styled from 'styled-components'

export const Poster = styled.img`
  height: 170px;
  width: 254px;
  border-radius: 8px;

  @media screen and (max-width: 576px) {
    height: 64px;
    width: 90px;
  }
`
export const PosterContainer = styled.div`
  &:hover {
    transform: scale(1.1);
  }
  border-radius: 8px;
`
