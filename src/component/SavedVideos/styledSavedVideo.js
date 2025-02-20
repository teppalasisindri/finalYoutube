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
export const SavedContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 1100px;
  height: 530px;
  overflow-y: auto;
`
export const BannerContainer = styled.div`
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
export const UnOrderList = styled.ul`
  display: flex;
  flex-direction: column;
`
export const ListItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  height: 200px;
  margin: 20px;
`
export const ListImage = styled.img`
  height: 200px;
  width: 350px;
`
export const ListContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;
`

export const ViewsDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const ViewsParagraph = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  color: ${props => (props.activeTheme ? '#181818' : '#909090')};
  margin-right: 7px;
`
