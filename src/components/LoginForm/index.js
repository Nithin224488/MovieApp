import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  LoginFormContainer,
  Logo,
  FormContainer,
  Heading,
  InputContainer,
  InputLabel,
  UserNameInputField,
  PasswordInputField,
  LoginButton,
  ErrorMessage,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const requestTokenResponse = await fetch(
      'https://api.themoviedb.org/3/authentication/token/new?api_key=77b8f4b9c7d3ecf6b9f0b992120c1dae',
    )
    const requestTokenData = await requestTokenResponse.json()
    const requestToken = requestTokenData.request_token

    const userDetails = {username, password, request_token: requestToken}

    const url =
      'https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=77b8f4b9c7d3ecf6b9f0b992120c1dae'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
      headers: {
        'Content-type': 'application/json',
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.status_message)
    }
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <InputLabel htmlFor="password">PASSWORD</InputLabel>
        <PasswordInputField
          type="password"
          id="password"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <InputLabel htmlFor="username">USERNAME</InputLabel>
        <UserNameInputField
          id="username"
          type="text"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <LoginFormContainer>
        <Logo
          src="https://res.cloudinary.com/dsepzpw0f/image/upload/v1633768656/Group_7399_wca4yy.svg"
          alt="logo"
        />
        <FormContainer onSubmit={this.submitForm}>
          <Heading>Sign In</Heading>
          <InputContainer>{this.renderUsernameField()}</InputContainer>
          <InputContainer>{this.renderPasswordField()}</InputContainer>
          {showSubmitError && <ErrorMessage>*{errorMsg}</ErrorMessage>}
          <LoginButton type="submit" className="login-button">
            Sign in
          </LoginButton>
        </FormContainer>
      </LoginFormContainer>
    )
  }
}

export default LoginForm
