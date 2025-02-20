/* eslint-disable import/named */
import {Component} from 'react'
import Cookies from 'js-cookie'

import NxtWatchContext from '../../context/nxtWatchContext'
import './index.css'

import {
  LoginContainer,
  LoginFormContainer,
  LabelParagraph,
  InputContainer,
  InputElement,
  InputElementCheckbox,
  CustomButton,
  ErrorMsgText,
} from './loginForm'

class LoginForm extends Component {
  state = {
    passwordShow: false,
    usernameInput: '',
    userPasswordInput: '',
    errorMsgShow: false,
  }

  componentDidMount() {
    const {history} = this.props
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      history.replace('/')
    }
  }

  onCheckboxCheck = () => {
    this.setState(prevState => ({passwordShow: !prevState.passwordShow}))
  }

  onUsername = event => {
    this.setState({usernameInput: event.target.value})
  }

  onPassword = event => {
    this.setState({userPasswordInput: event.target.value})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {usernameInput, userPasswordInput} = this.state
    const details = {username: usernameInput, password: userPasswordInput}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(details),
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const jwtToken = data.jwt_token
      Cookies.set('jwt_token', jwtToken, {expires: 365})
      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({errorMsgShow: true})
    }
  }

  render() {
    const {
      errorMsgShow,
      passwordShow,
      usernameInput,
      userPasswordInput,
    } = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {activeTheme} = value

          return (
            <LoginContainer activeTheme={activeTheme}>
              <LoginFormContainer
                activeTheme={activeTheme}
                onSubmit={this.onSubmitForm}
              >
                {activeTheme ? (
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="website logo"
                    className="logo-image"
                  />
                ) : (
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                    alt="website logo"
                    className="logo-image"
                  />
                )}
                <InputContainer>
                  <LabelParagraph htmlFor="username" activeTheme={activeTheme}>
                    USERNAME
                  </LabelParagraph>
                  <InputElement
                    type="text"
                    id="username"
                    activeTheme={activeTheme}
                    placeholder="Username"
                    onChange={this.onUsername}
                    value={usernameInput}
                  />
                </InputContainer>
                <InputContainer>
                  <LabelParagraph htmlFor="password" activeTheme={activeTheme}>
                    PASSWORD
                  </LabelParagraph>
                  {passwordShow ? (
                    <InputElement
                      type="text"
                      id="password"
                      activeTheme={activeTheme}
                      placeholder="Password"
                      onChange={this.onPassword}
                      value={userPasswordInput}
                    />
                  ) : (
                    <InputElement
                      type="password"
                      activeTheme={activeTheme}
                      placeholder="Password"
                      onChange={this.onPassword}
                      value={userPasswordInput}
                    />
                  )}

                  <div className="show-password-container">
                    <InputElementCheckbox
                      type="checkbox"
                      id="checkbox"
                      activeTheme={activeTheme}
                      onChange={this.onCheckboxCheck}
                    />
                    <LabelParagraph
                      activeTheme={activeTheme}
                      htmlFor="checkbox"
                    >
                      Show Password
                    </LabelParagraph>
                  </div>
                </InputContainer>
                <CustomButton type="submit">Login</CustomButton>
                {errorMsgShow && (
                  <ErrorMsgText>
                    *Username and Password didn't match
                  </ErrorMsgText>
                )}
              </LoginFormContainer>
            </LoginContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default LoginForm
