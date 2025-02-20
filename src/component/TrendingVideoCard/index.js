import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import NxtWatchContext from '../../context/nxtWatchContext'
import {
  ListItem,
  ListImage,
  ListContentDiv,
  Heading,
  Paragraph,
  ViewsDiv,
  ViewsParagraph,
} from './styledTrendingVideoCard'
import './index.css'

const TrendingVideoCard = props => {
  const {details} = props
  const {channel, publishedAt, id, thumbnailUrl, title, viewCount} = details
  const {name, profileImageUrl} = channel
  const date = formatDistanceToNow(new Date(publishedAt))

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {activeTheme} = value

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
                  <ViewsParagraph activeTheme={activeTheme}>
                    {date}
                  </ViewsParagraph>
                </ViewsDiv>
              </ListContentDiv>
            </ListItem>
          </Link>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}
export default TrendingVideoCard
