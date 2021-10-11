import styled from 'styled-components'

export const MovieDetailsContainer = styled.div`
  min-height: 100vh;
`
export const MovieBanner = styled.div`
  background-image: url(${props =>
    props.backgroundImageUrl ? props.backgroundImageUrl : null});
  height: 605px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-size: 100% 100%;
  @media screen and (max-width: 360px) {
    background-size: cover;
    height: 472px;
  }
`
export const MovieDetailsContent = styled.div`
  margin-left: 164px;
  @media screen and (max-width: 360px) {
    margin-left: 32px;
  }
`
export const MovieName = styled.h1`
  font-family: HK Grotesk;
  font-size: 64px;
  font-style: normal;
  font-weight: 600;
  line-height: 62px;
  letter-spacing: 0px;
  text-align: left;
  height: 62px;

  color: #ffffff;

  @media screen and (max-width: 360px) {
    font-family: Roboto;
    font-size: 48px;
    font-style: normal;
    font-weight: 500;
    line-height: 56px;
    letter-spacing: 0px;
    text-align: left;
    height: 56px;
  }
`
export const MovieType = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-between;
`
export const RunTime = styled.p`
  font-size: 30px;
  color: #fff;
`
export const CensorRating = styled.p`
  font-size: 30px;
  color: #fff;
`
export const Year = styled.p`
  font-size: 30px;
  color: #fff;
`
export const MovieDescription = styled.p`
  font-family: HK Grotesk;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff;
  height: 78px;
  width: 443px;
  left: 164px;
  top: 285px;
  @media screen and (max-width: 360px) {
    font-family: HK Grotesk;
    font-size: 16px;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
    height: 63px;
    width: 296px;
  }
`
export const PlayButton = styled.button`
  height: 48px;
  width: 77px;
  color: #171f46;
  background-color: #fff;
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 4px;
  padding: 12px, 24px, 12px, 24px;

  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  @media screen and (max-width: 360px) {
    height: 40px;
    width: 74px;
    padding: 12px, 24px, 12px, 24px;
    margin-top: 20px;
  }
`
export const FadeBottom = styled.div`
  position: absolute;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(24, 24, 24, 0.546875) 38.26%,
    #181818 92.82%,
    #181818 98.68%,
    #181818 108.61%
  );
  height: 162px;
  width: 100%;
  left: 0px;
  top: 443px;
  border-radius: 0px;
`
