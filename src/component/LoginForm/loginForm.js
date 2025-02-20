/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props => (props.activeTheme ? '#181818' : '#f9f9f9')};
  background-color: ${props => (props.activeTheme ? '#f9f9f9' : '#181818')};
  min-height: 100vh;
`
export const LoginFormContainer = styled.form`
  box-shadow: 0px 4px 6px
    ${props =>
      props.activeTheme ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.5)'};
  padding: 30px;
`
export const LabelParagraph = styled.label`
  color: ${props => (props.activeTheme ? '#181818' : '#f9f9f9')};
  font-size: 18px;
  font-family: 'Roboto';
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`
export const InputElement = styled.input`
  height: 40px;
  width: 300px;
  border-radius: 5px;
  border: solid 1px ${props => (props.activeTheme ? '#181818' : '#f9f9f9')};
  padding-left: 10px;
`
export const InputElementCheckbox = styled.input`
  height: 15px;
  width: 15px;
  border-radius: 5px;
  border: solid 1px ${props => (props.activeTheme ? '#181818' : '#f9f9f9')};
  padding-left: 10px;
`
export const CustomButton = styled.button`
  height: 40px;
  width: 300px;
  border: 0px;
  outline: none;
  background-color: #3b82f6;
  color: #ffffff;
  cursor: pointer;
  border-radius: 5px;
`
export const ErrorMsgText = styled.p`
  font-size: 13px;
  font-family: 'Roboto';
  color: Red;
`
