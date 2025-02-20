import NxtWatchContext from '../../context/nxtWatchContext'
import Header from '../Header'
import LeftNavbar from '../LeftNavbar'
import {
  HomeContainer,
  BelowContainer,
  FailureContainer,
  FailureImage,
  Heading,
  Paragraph,
  SavedContainer,
  BannerContainer,
  TrendingHeading,
  UnOrderList,
  ListItem,
  ListImage,
  ListContentDiv,
  ViewsDiv,
  ViewsParagraph,
} from './styledNotFound'

const NotFound = () => {
  const a = null

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {saveList, activeTheme} = value
        const listLength = saveList.length

        return (
          <HomeContainer activeTheme={activeTheme}>
            <Header />
            <BelowContainer>
              <LeftNavbar />
              <FailureContainer>
                {activeTheme ? (
                  <FailureImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
                    alt="not found"
                  />
                ) : (
                  <FailureImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png"
                    alt="not found"
                  />
                )}
                <Heading activeTheme={activeTheme}>Page Not Found</Heading>
                <Paragraph activeTheme={activeTheme}>
                  We are sorry, the page you are requested could not be found.
                </Paragraph>
              </FailureContainer>
            </BelowContainer>
          </HomeContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}
export default NotFound
