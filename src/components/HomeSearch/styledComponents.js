import styled from 'styled-components'

export const SearchContainer = styled.div`
  background: #181818;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const SearchList = styled.ul`
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
  min-height: 90vh;
  @media screen and (max-width: 360px) {
    width: 90%;
  }
`
export const LoaderSpinnerContainer = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const FailureContainer = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FailureImage = styled.img`
  height: 378px;
  width: 450px;
  @media screen and (max-height: 360px) {
    height: 176px;
    width: 209px;
  }
`
export const FailureText = styled.p`
  font-family: HK Grotesk;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 31px;
  letter-spacing: 0em;
  color: #ffffff;
  @media screen and (max-height: 360px) {
    font-size: 16px;

    line-height: 24px;
  }
`
