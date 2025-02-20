/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const HomeContainer = styled.div`
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
export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1100px;
  overflow-y: auto;
`

export const UnOrderList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 530px;
  overflow-y: auto;
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
export const SearchInput = styled.input`
  height: 40px;
  width: 600px;
  border: 0px;
  outline: none;
  background-color: transparent;
  color: ${props => (props.activeTheme ? '#181818' : '#f9f9f9')};
`
export const PopCon = styled.div`
  width: 1000px;
  height: 200px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  margin-top: 20px;
  margin-left: 50px;
`
export const PopLeft = styled.div`
  width: 300px;
`
export const Head = styled.img`
  height: 40px;
  width: 150px;
`

export const Para = styled.p`
  font-size: 17px;
  font-family: 'Roboto';
  color: #000000;
`
export const But = styled.button`
  height: 40px;
  width: 150px;
  border: solid 1px #000000;
  background-color: transparent;
  font-size: 17px;
`
