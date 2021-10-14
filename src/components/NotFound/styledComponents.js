import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  height: 100vh;
  background-image: url('https://res.cloudinary.com/dsepzpw0f/image/upload/v1634149070/snow-removal-machine-working-high-ski-slope-snowstorm_454047-2149_1_nmqqsk.png');
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;
`
export const NotFoundHeading = styled.h1`
  font-family: 'HK Grotesk';
  font-size: 96px;
  font-style: normal;
  font-weight: 700;
  line-height: 125px;
  letter-spacing: 0px;
  text-align: left;
  color: #ffffff;
  @media screen and (max-width: 360px) {
    font-size: 40px;
    line-height: 52px;
    letter-spacing: 0px;
  }
`
export const NotFoundDescription = styled.p`
  font-family: 'HK Grotesk';
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 31px;
  letter-spacing: 0em;
  text-align: center;
  color: #ffffff;
  @media screen and (max-width: 360px) {
    font-size: 16px;
    line-height: 21px;
  }
`
export const HomeButton = styled.button`
  height: 48px;
  width: 135px;

  border-radius: 3px;

  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  border: none;
  outline: none;
  cursor: pointer;
  color: #171f46;
  background-color: #ffffff;
`
export const ErrorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 150px;
  color: #ffffff;
`
export const ErrorCode = styled.p`
  font-family: 'HK Grotesk';
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 42px;
  letter-spacing: 0em;
  text-align: center;
  @media screen and (max-width: 360px) {
    font-size: 20px;
    line-height: 26px;
  }
`
export const Error = styled.p`
  font-family: 'HK Grotesk';
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 42px;
  letter-spacing: 0em;
  text-align: center;
  margin-left: 20px;
  @media screen and (max-width: 360px) {
    font-size: 20px;
    line-height: 26px;
  }
`
