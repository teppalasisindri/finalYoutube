/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const ListItem = styled.li`
  list-style-type: none;
  height: 300px;
  width: 240px;
  margin: 10px;
`
export const ListImage = styled.img`
  height: 150px;
  width: 240px;
`
export const CardBelowContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const CardProfileImage = styled.img`
  height: 35px;
  width: 35px;
  margin-right: 5px;
  margin-top: 13px;
`
export const CardContainer = styled.div``
export const CardParagraph = styled.p`
  font-size: 13px;
  font-family: 'Roboto';
  color: ${props => (props.activeTheme ? '#181818' : '#f9f9f9')};
`
export const CardChannelParagraph = styled.p`
  font-size: 13px;
  font-family: 'Roboto';
  color: ${props => (props.activeTheme ? '#181818' : '#909090')};
`
export const ViewsDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const ViewsParagraph = styled.p`
  font-size: 13px;
  font-family: 'Roboto';
  color: ${props => (props.activeTheme ? '#181818' : '#909090')};
  margin-right: 7px;
`
