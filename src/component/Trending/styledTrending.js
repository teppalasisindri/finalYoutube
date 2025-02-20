/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => (props.activeTheme ? '#f9f9f9' : '#0f0f0f')};
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
export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1100px;
  height: 460px;
  overflow-y: auto;
`

export const UnOrderList = styled.ul`
  display: flex;
  flex-direction: column;
`
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const Search = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: solid 1px ${props => (props.activeTheme ? '#181818' : '#f9f9f9')};
  width: 670px;
  height: 40px;
  margin-left: 50px;
  margin-top: 20px;
`
export const TrendingTopContainer = styled.div`
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.activeTheme ? ' #d7dfe9' : '#231f20')};
`
export const TrendingHeading = styled.h1`
  font-size: 40px;
  font-family: 'Roboto';
  color: ${props => (props.activeTheme ? '#181818' : '#f9f9f9')};
`
