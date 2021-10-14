import Cookies from 'js-cookie'
import Header from '../Header'
import {
  AccountContainer,
  AccountDetailsContainer,
  Heading,
  HrLine,
  DetailContainer,
  AccountHeading,
  AccountDetail,
  Password,
  AccountTypeContainer,
  AccountType,
  LogoutButton,
} from './styledComponents'

const Account = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <>
      <Header isBackgroundDark />
      <AccountContainer>
        <AccountDetailsContainer>
          <Heading>Account</Heading>
          <HrLine />
          <DetailContainer>
            <AccountHeading>Member ship </AccountHeading>
            <div>
              <AccountDetail>nithin@gmail.com</AccountDetail>
              <Password>Password : **************</Password>
            </div>
          </DetailContainer>
          <HrLine />

          <DetailContainer>
            <AccountHeading>Plan details </AccountHeading>
            <AccountDetail>Premium</AccountDetail>
            <AccountTypeContainer>
              <AccountType>Ultra HD</AccountType>
            </AccountTypeContainer>
          </DetailContainer>
          <HrLine />
        </AccountDetailsContainer>
        <LogoutButton onClick={onClickLogout}>Logout</LogoutButton>
      </AccountContainer>
    </>
  )
}
export default Account
