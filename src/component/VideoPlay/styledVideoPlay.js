/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const VideoContainer = styled.div``
export const Video = styled.div``
export const DescriptionParagraph = styled.p`
  font-size: 20px;
  font-family: 'Roboto';
  color: ${props => (props.activeTheme ? '#181818' : '#f9f9f9')};
`
export const ViewsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 50px;
`
export const ViewsDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const ViewsParagraph = styled.p`
  font-size: 17px;
  font-family: 'Roboto';
  color: ${props => (props.activeTheme ? '#181818' : '#909090')};
  margin-right: 7px;
`
export const HorizontalLine = styled.hr`
  color: ${props => (props.activeTheme ? '#181818' : '#f9f9f9')};
`
export const LikesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const LikeButtons = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${props => (props.like ? '#2563eb' : ' #64748b')};
`
export const LikeButtons1 = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${props => (props.like ? '#2563eb' : ' #64748b')};
`
export const LikeButtons2 = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${props => (props.save ? '#2563eb' : ' #64748b')};
`

export const Texts = styled.p`
  font-size: 17px;
  font-family: 'Roboto';
  color: ${props => (props.activeTheme ? '#181818' : '#909090')};
  margin-right: 7px;
`
export const ReviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 20px;
`
export const CardLogo = styled.img`
  height: 60px;
  width: 60px;
`
export const CardRightContainer = styled.div`
  padding-left: 30px;
  width: 1000px;
`

export const CardParagraphs = styled.p`
  color: ${props => (props.activeTheme ? '#181818' : '#f9f9f9')};
  font-size: 20px;
  font-family: 'Roboto';
  margin-top: 0px;
`
export const CardSubscribes = styled.p`
  font-size: 17px;
  font-family: 'Roboto';
  color: ${props => (props.activeTheme ? '#181818' : '#909090')};
`
