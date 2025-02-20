import {Link} from 'react-router-dom'
import NxtWatchContext from '../../context/nxtWatchContext'
import {
  ListItem,
  ListImage,
  ListContentDiv,
  Heading,
  Paragraph,
  ViewsParagraph,
} from './styledGamingCard'
import './index.css'

const TrendingVideoCard = props => {
  const {details} = props
  const {id, thumbnailUrl, title, viewCount} = details

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
                <ViewsParagraph activeTheme={activeTheme}>
                  {viewCount} Watching Worldwide
                </ViewsParagraph>
              </ListContentDiv>
            </ListItem>
          </Link>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}
export default TrendingVideoCard
