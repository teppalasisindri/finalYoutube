import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import NxtWatchContext from '../../context/nxtWatchContext'
import './index.css'

import {
  ListItem,
  ListImage,
  CardBelowContainer,
  CardProfileImage,
  CardContainer,
  CardParagraph,
  CardChannelParagraph,
  ViewsDiv,
  ViewsParagraph,
} from './styledCardDetails'

const CardDetails = props => {
  const {details} = props
  const {channel, publishedAt, id, thumbnailUrl, title, viewCount} = details
  const {name, profileImageUrl} = channel
  const date = formatDistanceToNow(new Date(publishedAt))

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {activeTheme} = value

        return (
          <Link to={`/videos/${id}`} className="text-decoration">
            <ListItem>
              <ListImage src={thumbnailUrl} alt="video thumbnail" />
              <CardBelowContainer>
                <CardProfileImage src={profileImageUrl} alt="channel logo" />
                <CardContainer>
                  <CardParagraph activeTheme={activeTheme}>
                    {title}
                  </CardParagraph>
                  <CardChannelParagraph activeTheme={activeTheme}>
                    {name}
                  </CardChannelParagraph>
                  <ViewsDiv>
                    <ViewsParagraph activeTheme={activeTheme}>
                      {viewCount} views
                    </ViewsParagraph>
                    <ViewsParagraph activeTheme={activeTheme}>
                      {' '}
                      .{' '}
                    </ViewsParagraph>
                    <ViewsParagraph activeTheme={activeTheme}>
                      {date}
                    </ViewsParagraph>
                  </ViewsDiv>
                </CardContainer>
              </CardBelowContainer>
            </ListItem>
          </Link>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}
export default CardDetails
