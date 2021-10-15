import styled from 'styled-components'

export const HomeContainer = styled.div`
  min-height: 100vh;
  position: relative;
  top: 0;
  left: 0;
  font-family: 'Roboto';
`
export const Banner = styled.div`
  background-image: url(${props =>
    props.backgroundImageUrl ? props.backgroundImageUrl : null});
  height: 605px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-size: 100% 100%;
  @media screen and (max-width: 576px) {
    background-size: cover;
    height: 472px;
  }
`
export const ContentContainer = styled.div`
  width: 90%;
  max-width: 1140px;
  z-index: 20px;
  align-self: center;
  @media screen and (max-width: 576px) {
    width: 90%;
  }
`
export const BannerTitle = styled.h1`
  font-family: 'HK Grotesk';
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: 62px;
  letter-spacing: 0px;
  text-align: left;
  min-height: 62px;
  color: #ffffff;

  @media screen and (max-width: 576px) {
    font-family: 'HK Grotesk';
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 56px;
    letter-spacing: 0px;
    text-align: left;
    min-height: 56px;
    margin-bottom: 15px;
  }
`
export const OverView = styled.p`
  font-family: 'HK Grotesk';
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff;
  min-height: 78px;
  max-width: 443px;
  overflow: none;

  @media screen and (max-width: 576px) {
    font-family: 'HK Grotesk';
    font-size: 16px;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
    min-height: 63px;
    max-width: 296px;
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
  @media screen and (max-width: 576px) {
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
  @media screen and (max-width: 576px) {
    top: 320px;
  }
`
export const MovieContainer = styled.div`
  background: #131313;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 576px) {
    padding-right: 0px;
    padding-left: 0px;
  }
`
export const MovieListContainer = styled.div`
  width: 90%;
  max-width: 1140px;
  z-index: 100;
  @media screen and (max-width: 576px) {
    max-width: 80%;
  }
`
export const MovieListTitle = styled.h1`
  color: #fff;
  font-family: HK Grotesk;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 42px;
  letter-spacing: 0px;
  text-align: left;
  height: 42px;
  width: 197px;

  margin: 0;
  margin-top: 40px;
  margin-bottom: 20px;

  @media screen and (max-width: 576px) {
    font-family: HK Grotesk;
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 10px;
    line-height: 26px;
    letter-spacing: 0px;
    text-align: left;
  }
`
export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px;
`
export const ContactIcons = styled.div`
  display: flex;
  justify-content: space-between;
  color: #fff;
  cursor: pointer;
`
export const ContactText = styled.p`
  font-family: 'HK Grotesk';
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0px;
  text-align: left;
  height: 28px;
  width: 80px;
  color: #ffffff;
  @media screen and (max-width: 576px) {
    font-size: 14px;
    line-height: 20px;
    height: 20px;
    width: 70px;
  }
`
