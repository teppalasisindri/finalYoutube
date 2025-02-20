import {Link} from 'react-router-dom'
import {FaFire} from 'react-icons/fa'
import {formatDistanceToNow} from 'date-fns'
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
} from './styledSavedVideo'

const SavedVideoCard = props => {
  const {details, activeTheme} = props
  const {id, thumbnailUrl, title, name, viewCount, publishedAt} = details
  const date = formatDistanceToNow(new Date(publishedAt))

  return (
    <Link to={`/videos/${id}`} className="link-item">
      <ListItem>
        <ListImage src={thumbnailUrl} alt="video thumbnail" />
        <ListContentDiv>
          <Heading activeTheme={activeTheme}>{title}</Heading>
          <Paragraph activeTheme={activeTheme}>{name}</Paragraph>
          <ViewsDiv>
            <ViewsParagraph activeTheme={activeTheme}>
              {viewCount} views
            </ViewsParagraph>
            <ViewsParagraph activeTheme={activeTheme}> . </ViewsParagraph>
            <ViewsParagraph activeTheme={activeTheme}>{date}</ViewsParagraph>
          </ViewsDiv>
        </ListContentDiv>
      </ListItem>
    </Link>
  )
}

const SavedVideos = () => {
  const a = null

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {saveList, activeTheme} = value
        const listLength = saveList.length

        return (
          <HomeContainer activeTheme={activeTheme} data-testid="savedVideos">
            <Header />
            <BelowContainer>
              <LeftNavbar />
              {listLength === 0 ? (
                <FailureContainer>
                  {activeTheme ? (
                    <FailureImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                      alt="no saved videos"
                    />
                  ) : (
                    <FailureImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                      alt="no saved videos"
                    />
                  )}
                  <Heading activeTheme={activeTheme}>
                    No saved videos found
                  </Heading>
                  <Paragraph activeTheme={activeTheme}>
                    You can save your videos while watching them
                  </Paragraph>
                </FailureContainer>
              ) : (
                <SavedContainer>
                  <BannerContainer activeTheme={activeTheme}>
                    <FaFire className="icon" />
                    <TrendingHeading activeTheme={activeTheme}>
                      Trending
                    </TrendingHeading>
                  </BannerContainer>
                  <UnOrderList>
                    {saveList.map(each => (
                      <SavedVideoCard
                        key={each.id}
                        details={each}
                        activeTheme={activeTheme}
                      />
                    ))}
                  </UnOrderList>
                </SavedContainer>
              )}
            </BelowContainer>
          </HomeContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}
export default SavedVideos
