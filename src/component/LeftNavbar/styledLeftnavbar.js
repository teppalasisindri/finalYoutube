/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const LeftMainContainer = styled.div`
  background-color: ${props => (props.activeTheme ? '#e2e8f0' : '#313131')};
  padding-top: 10px;
  padding-bottom: 10px;
  width: 250px;
  height: 530px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const LeftTopCardDiv = styled.div`
  display: flex;
  flex-direction: column;
`
export const UnOrderList = styled.ul`
  background-color: '#313131';
`
export const ListItems = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;
  padding: 5px;
`
export const ParagraphElement = styled.button`
  font-size: 20px;
  font-family: 'Roboto';
  color: ${props => (props.activeTheme ? '#181818' : '#f9f9f9')};
  background-color: transparent;
  border: 0px;
  outline: none;
  cursor: pointer;
  margin-left: 15px;
`
export const Icons = styled.div`
  color: ${props => (props.activeTheme ? '#181818' : '#f9f9f9')};
`
export const NavBelowContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
`
export const NavHeading = styled.h1`
  font-size: 15px;
  font-family: 'Roboto';
  color: ${props => (props.activeTheme ? '#181818' : '#f9f9f9')};
`
export const LogosDiv = styled.div`
  display: flex;
  flex-direction: row;
`
export const LogoImage = styled.img`
  height: 25px;
  width: 25px;
  margin-right: 15px;
`
export const NavParagraph = styled.p`
    font-size:14px;
    font-family:"Roboto"
    color: ${props => (props.activeTheme ? '#181818' : '#f9f9f9')};
`
