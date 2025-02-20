/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const ListItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  height: 350px;
  width: 220px;
  margin: 20px;
`
export const ListImage = styled.img`
  height: 290px;
  width: 220px;
`
export const ListContentDiv = styled.div`
  display: flex;
  flex-direction: column;
`
export const Heading = styled.h1`
  font-size: 23px;
  font-family: 'Roboto';
  color: ${props => (props.activeTheme ? '#181818' : '#f9f9f9')};
  margin-bottom: 0px;
`
export const Paragraph = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  color: ${props => (props.activeTheme ? '#181818' : '#909090')};
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
