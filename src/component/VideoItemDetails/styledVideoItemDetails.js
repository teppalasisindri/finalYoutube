/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const MainBgContainer = styled.div`
  background-color: ${props => (props.activeTheme ? '#f9f9f9' : '#181818')};
  color: ${props => (props.activeTheme ? '#181818' : '#f9f9f9')};
  min-height: 100vh;
`
export const BelowContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1000px;
`
export const FailureImage = styled.img`
  height: 300px;
  width: 350px;
`
export const Heading = styled.h1`
  font-size: 30px;
  font-family: 'Roboto';
  color: ${props => (props.activeTheme ? '#181818' : '#f9f9f9')};
`
export const Paragraph = styled.p`
  font-size: 20px;
  font-family: 'Roboto';
  color: ${props => (props.activeTheme ? '#181818' : '#f9f9f9')};
`
export const CustomButton = styled.button`
  height: 40px;
  width: 140px;
  font-size: 25px;
  font-family: 'Roboto';
  border: 0px;
  outline: none;
  border-radius: 5px;
  background-color: #0070c1;
  color: #ffffff;
`
export const VideoContainer = styled.div`
  height: 530px;
  overflow-y: auto;
  padding: 20px;
`
