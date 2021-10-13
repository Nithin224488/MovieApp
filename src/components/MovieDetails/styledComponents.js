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
  width: 90%;
  max-width: 1140px;
  z-index: 100px;
  align-self: center;
  @media screen and (max-width: 360px) {
    width: 90%;
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
  min-height: 62px;
  color: #ffffff;

  @media screen and (max-width: 360px) {
    font-family: Roboto;
    font-size: 48px;
    font-weight: 500;
    line-height: 56px;
    min-height: 56px;
  }
`
export const MovieType = styled.div`
  display: flex;
  width: 200px;
  justify-content: space-between;
`
export const RunTime = styled.p`
  font-family: HK Grotesk;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 23px;
  letter-spacing: 0px;
  text-align: left;
  color: #fff;
  @media screen and (max-width: 360px) {
    font-size: 16px;
    line-height: 21px;
  }
`
export const CensorContainer = styled.div`
  border: 1px #ffffff solid;
  width: 35px;
  height: 24px;
  padding: 2px 10px 2px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
`
export const CensorRating = styled.p`
  font-family: HK Grotesk;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 23px;
  letter-spacing: 0px;
  text-align: left;
  color: #fff;
  margin: 0;

  @media screen and (max-width: 360px) {
    font-size: 16px;
    line-height: 21px;
  }
`
export const Year = styled.p`
  font-family: HK Grotesk;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 23px;
  letter-spacing: 0px;
  text-align: left;
  color: #fff;
  @media screen and (max-width: 360px) {
    font-size: 16px;
    line-height: 21px;
  }
`
export const MovieDescription = styled.p`
  font-family: HK Grotesk;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0px;
  text-align: left;
  min-height: 78px;
  width: 632px;
  color: #fff;
  @media screen and (max-width: 360px) {
    font-family: HK Grotesk;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
    min-height: 63px;
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
  z-index: 20;
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
  @media screen and (max-width: 360px) {
    top: 320px;
  }
`
export const MovieDetailsBottom = styled.div`
  background: #181818;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const MovieSpecificDetails = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  max-width: 1140px;
  @media screen and (max-width: 360px) {
    width: 90%;
    flex-wrap: wrap;
  }
`
export const DetailContainer = styled.div`
  @media screen and (max-width: 360px) {
    flex-basis: 30%;
  }
`
export const DetailHeading = styled.h1`
  font-family: HK Grotesk;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: 0px;
  color: #64748b;
  height: 26px;

  @media screen and (max-width: 360px) {
    font-size: 14px;
    line-height: 18px;
    height: 18px;
  }
`
export const DetailList = styled.ul`
  list-style-type: none;
  padding-left: 0;
`
export const DetailItem = styled.li`
  color: #ffffff;
  font-family: HK Grotesk;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  padding-bottom: 5px;
  height: 24px;

  @media screen and (max-width: 360px) {
    font-size: 12px;
    line-height: 20px;
    height: 20px;
  }
`
export const Detail = styled.p`
  color: #ffffff;
  font-family: HK Grotesk;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  padding-bottom: 5px;
  height: 24px;
  @media screen and (max-width: 360px) {
    font-size: 12px;
    line-height: 20px;
    height: 20px;
  }
`
export const SimilarMoviesContainer = styled.div`
  width: 90%;
  max-width: 1140px;
  @media screen and (max-width: 360px) {
    width: 90%;
  }
`

export const SimilarMoviesHeading = styled.h1`
  font-family: HK Grotesk;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: 0px;
  text-align: left;
  color: #ffffff;
  height: 36px;
  width: 170px;

  @media screen and (max-width: 360px) {
    font-size: 24px;
    line-height: 31px;
    height: 31px;
    width: 146px;
  }
`
export const SimilarMoviesList = styled.div`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
export const LoaderSpinnerContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #181818;
`
