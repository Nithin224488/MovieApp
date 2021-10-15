import styled from 'styled-components'

export const PopularContainer = styled.div`
  background: #181818;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const PopularList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style-type: none;
  padding-top: 100px;
  width: 90%;
  max-width: 1140px;
  z-index: 20px;
  align-self: center;
  padding-left: 0;
  @media screen and (max-width: 576px) {
    width: 90%;
  }
`
export const LoaderSpinnerContainer = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
