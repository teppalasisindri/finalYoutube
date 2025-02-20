import {Component, React} from 'react'
import {formatDistanceToNow} from 'date-fns'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'

import ReactPlayer from 'react-player/youtube'
import NxtWatchContext from '../../context/nxtWatchContext'
import {
  VideoContainer,
  Video,
  DescriptionParagraph,
  ViewsContainer,
  ViewsDiv,
  ViewsParagraph,
  HorizontalLine,
  LikesContainer,
  Texts,
  LikeButtons,
  LikeButtons1,
  LikeButtons2,
  CardLogo,
  ReviewContainer,
  CardRightContainer,
  CardParagraphs,
  CardSubscribes,
} from './styledVideoPlay'
import './index.css'

class VideoPlay extends Component {
  state = {like: false, dislike: false}

  onToggleLike = () => {
    const {like, dislike} = this.state
    this.setState(prevState => ({
      like: !prevState.like,
      dislike: false,
    }))
  }

  onToggleDisLike = () => {
    const {like, dislike} = this.state
    this.setState(prevState => ({dislike: !prevState.dislike, like: false}))
  }

  render() {
    const {like, dislike} = this.state

    const {details} = this.props
    const {
      id,
      videoUrl,
      title,
      viewCount,
      publishedAt,
      profileImageUrl,
      name,
      subscriberCount,
      description,
    } = details
    const date = formatDistanceToNow(new Date(publishedAt))

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {activeTheme, onSave, save} = value

          console.log(save)

          this.onToggleSave = () => {
            onSave({details})
          }

          return (
            <VideoContainer>
              <Video>
                <ReactPlayer url={videoUrl} />
              </Video>
              <DescriptionParagraph activeTheme={activeTheme}>
                {title}
              </DescriptionParagraph>
              <ViewsContainer>
                <ViewsDiv>
                  <ViewsParagraph activeTheme={activeTheme}>
                    {viewCount} views
                  </ViewsParagraph>
                  <ViewsParagraph activeTheme={activeTheme}> . </ViewsParagraph>
                  <ViewsParagraph activeTheme={activeTheme}>
                    {date}
                  </ViewsParagraph>
                </ViewsDiv>
                <LikesContainer>
                  <LikeButtons onClick={this.onToggleLike} like={like}>
                    <BiLike />
                    <Texts activeTheme={activeTheme}>Like</Texts>
                  </LikeButtons>
                  <LikeButtons1 onClick={this.onToggleDisLike} like={dislike}>
                    <BiDislike />
                    <Texts activeTheme={activeTheme}>Dislike</Texts>
                  </LikeButtons1>
                  <LikeButtons2 onClick={this.onToggleSave} save={save}>
                    <MdPlaylistAdd />
                    <Texts activeTheme={activeTheme}>Save</Texts>
                  </LikeButtons2>
                </LikesContainer>
              </ViewsContainer>
              <HorizontalLine activeTheme={activeTheme} />
              <ReviewContainer>
                <CardLogo src={profileImageUrl} alt="channel logo" />
                <CardRightContainer>
                  <CardParagraphs activeTheme={activeTheme}>
                    {name}
                  </CardParagraphs>
                  <CardSubscribes activeTheme={activeTheme}>
                    {subscriberCount}
                  </CardSubscribes>
                  <CardParagraphs activeTheme={activeTheme}>
                    {description}
                  </CardParagraphs>
                </CardRightContainer>
              </ReviewContainer>
            </VideoContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default VideoPlay
