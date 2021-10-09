import styled from 'styled-components'

import('typeface-hk-grotesk')

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100vh;

  margin: auto;

  background: #131313;

  @media screen and (min-width: 360px) {
    background-image: linear-gradient(
        116.64deg,
        rgba(0, 0, 0, 0.8) 0.46%,
        rgba(0, 0, 0, 0) 100%
      ),
      url('https://res.cloudinary.com/dsepzpw0f/image/upload/v1631630946/netfilx_1_uab9az.png');
    background-size: cover;
  }
`
export const Logo = styled.img`
  position: absolute;
  align-self: flex-start;
  height: 27px;
  width: 100px;
  left: 32px;
  top: 32px;
  border-radius: 0px;

  @media screen and (min-width: 360px) {
    height: 52px;
    width: 180px;
    left: 8.89%;
    top: 48px;
    border-radius: 0px;
  }
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  width: 90%;
  background: #131313;

  @media screen and (min-width: 360px) {
    flex-shrink: 0;
    padding: 64px 48px;

    border-radius: 8px;

    height: 440px;
    max-width: 456px;
    background: #0c0b10;
    opacity: 0.8;
    border-radius: 8px;
  }
`
export const Heading = styled.h1`
  font-family: 'typeface-hk-grotesk';
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: center;
  color: #ffffff;
  margin-bottom: 20px;
  @media screen and (max-width: 360px) {
    position: relative;
    height: 40px;
    left: 4.45%;
    align-self: flex-start;
  }
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  height: 64px;
  max-width: 360px;
  width: 90%;
  border-radius: 0px;
  @media screen and (max-width: 360px) {
    height: 64px;
    width: 100%;
    max-width: 296px;

    border-radius: 0px;
  }
`
export const InputLabel = styled.label`
  margin-bottom: 0px;
  font-family: 'Roboto';

  font-size: 12px;
  line-height: 16px;
  color: #475569;
  height: 16px;
  width: 65px;
  color: #ffffff;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.01em;
  text-align: left;
`
export const UserNameInputField = styled.input`
  height: 40px;
  color: #7e858e99;

  font-family: 'HK Grotesk';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;

  background: #333333;
  border: 0;
  border-radius: 2px;
  margin-top: 5px;
  padding: 8px 16px 8px 16px;
  outline: none;
`
export const PasswordInputField = styled.input`
  font-size: 14px;
  height: 40px;
  background: #333333;

  font-family: HK Grotesk;

  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;

  color: #7e858e99;

  border: 0;
  border-radius: 2px;
  margin-top: 5px;
  padding: 8px 16px 8px 16px;
  outline: none;
`
export const LoginButton = styled.button`
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  color: #ffffff;
  margin-top: 20px;
  margin-bottom: 2px;

  background: #e50914;

  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 30px;
  height: 40px;
  width: 84px;
  left: 678px;
  top: 628px;
  border-radius: 4px;
  padding: 8px, 20px, 8px, 20px;
  @media screen and (max-width: 360px) {
    height: 40px;
    width: 100%;
    max-width: 296px;
    left: 32px;
    top: 366px;
    border-radius: 4px;
    padding: 8px, 20px, 8px, 20px;
  }
`
export const ErrorMessage = styled.p`
  position: relative;
  height: 18px;
  width: 239px;
  margin-top: 15px;
  margin-bottom: 0px;
  align-self: flex-start;
  font-size: 12px;
  color: #fb923c;
  font-family: HK Grotesk;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  left: 4.45%;
  @media screen and (max-width: 360px) {
    line-height: 16px;
    height: 16px;
    width: 255px;
  }
`
