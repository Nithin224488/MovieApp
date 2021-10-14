import styled from 'styled-components'

export const AccountContainer = styled.div`
  height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const AccountDetailsContainer = styled.div`
  width: 90%;
  max-width: 1140px;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: 42px;
  letter-spacing: 0px;
  text-align: left;
  @media screen and (max-width: 360px) {
    font-size: 24px;
    line-height: 28px;
  }
`
export const HrLine = styled.hr`
  height: 2px;
  background: #cbd5e1;
  width: 100%;
`
export const DetailContainer = styled.div`
  display: flex;
  padding: 0;
  margin-right: 20px;
`
export const AccountHeading = styled.h1`
  font-family: 'HK Grotesk';
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 31px;
  letter-spacing: 0px;
  text-align: left;
  color: #94a3b8;
  @media screen and (max-width: 360px) {
    font-size: 18px;
    line-height: 23px;
  }
`
export const AccountDetail = styled.p`
  font-family: 'HK Grotesk';
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 31px;
  letter-spacing: 0px;
  text-align: left;
  color: #1e293b;
  padding-top: 0;
  margin-top: 16px;
  margin-left: 20px;
  @media screen and (max-width: 360px) {
    font-size: 16px;
    line-height: 21px;
  }
`
export const Password = styled.p`
  font-family: 'HK Grotesk';
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 31px;
  letter-spacing: 0px;
  text-align: left;
  color: #64748b;
  margin-left: 20px;
  @media screen and (max-width: 360px) {
    font-size: 16px;
    line-height: 21px;
  }
`
export const AccountTypeContainer = styled.div`
  border: 1px solid #1e293b;
  width: 100px;
  height: 25px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
`
export const AccountType = styled.p`
  font-family: 'HK Grotesk';
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 23px;
  letter-spacing: 0px;
  text-align: left;
  color: #1e293b;
  @media screen and (max-width: 360px) {
    font-size: 14px;
    line-height: 18px;
  }
`
export const LogoutButton = styled.button`
  height: 40px;
  width: 91px;
  border-radius: 4px;
  padding: 8px, 20px, 8px, 20px;
  background: #e50914;
  color: #ffff;
  outline: none;
  border: none;
  margin-top: 30px;
  cursor: pointer;
  @media screen and (max-width: 360px) {
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
    height: 40px;
    width: 91px;
    border-radius: 4px;
    padding: 8px, 20px, 8px, 20px;
  }
`
