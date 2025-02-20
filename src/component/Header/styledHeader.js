/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const HeaderBgContainer = styled.div`
  background-color: ${props => (props.activeTheme ? '#e2e8f0' : '#313131')};
  color: ${props => (props.activeTheme ? '#181818' : '#f9f9f9')};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 25px;
  padding-right: 25px;
  height: 70px;
`
export const DivContainers = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const LogoImage = styled.img`
  height: 40px;
  width: 140px;
`
export const HeaderCardImages = styled.img`
  height: 30px;
  width: 30px;
  margin-left: 35px;
  margin-right: 35px;
`
export const CustomButton = styled.button`
  height: 30px;
  width: 120px;
  background-color: transparent;
  border-radius: 4px;
  border: solid 1px ${props => (props.activeTheme ? '#3b82f6' : '#ffffff')};
  color: ${props => (props.activeTheme ? '#3b82f6' : '#ffffff')};
  font-size: 16px;
`
export const PopContainer = styled.div`
  background-color: ${props => (props.activeTheme ? '#ffffff' : ' #313131')};
`
export const CustomIcon = styled.button`
  height: 30px;
  width: 30px;
  background-color: transparent;
  outline: none;
  color: ${props => (props.activeTheme ? '#3b82f6' : '#ffffff')};
`
