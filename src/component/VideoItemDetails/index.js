import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import NxtWatchContext from '../../context/nxtWatchContext'
import Header from '../Header'
import LeftNavbar from '../LeftNavbar'
import VideoPlay from '../VideoPlay'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {
  MainBgContainer,
  BelowContainer,
  FailureContainer,
  FailureImage,
  Heading,
  Paragraph,
  CustomButton,
  VideoContainer,
} from './styledVideoItemDetails'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {apiStatus: apiStatusConstants.initial, videoDetails: {}}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()

      const formattedData = {
        description: data.video_details.description,
        id: data.video_details.id,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        viewCount: data.video_details.view_count,
        name: data.video_details.channel.name,
        profileImageUrl: data.video_details.channel.profile_image_url,
        subscriberCount: data.video_details.channel.subscriber_count,
      }
      this.setState({
        videoDetails: formattedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  render() {
    const {apiStatus, videoDetails} = this.state

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {activeTheme} = value

          const onRetry = () => {
            this.getData()
          }

          const renderVideoDetails = () => (
            <VideoContainer>
              <VideoPlay key={videoDetails.id} details={videoDetails} />
            </VideoContainer>
          )

          const renderLoadingView = () => (
            <div className="loader-container" data-testid="loader">
              <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
            </div>
          )

          const renderFailureView = () => (
            <FailureContainer>
              {activeTheme ? (
                <FailureImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
                  alt="failure view"
                />
              ) : (
                <FailureImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
                  alt="failure-view"
                />
              )}
              <Heading activeTheme={activeTheme}>
                Oops! Something Went Wrong
              </Heading>
              <Paragraph activeTheme={activeTheme}>
                We are having some trouble to complete your request. Please try
                again
              </Paragraph>
              <CustomButton onClick={onRetry}>Retry</CustomButton>
            </FailureContainer>
          )

          const renderResult = () => {
            switch (apiStatus) {
              case apiStatusConstants.success:
                return renderVideoDetails()
              case apiStatusConstants.failure:
                return renderFailureView()
              case apiStatusConstants.loading:
                return renderLoadingView()
              default:
                return null
            }
          }

          return (
            <MainBgContainer
              activeTheme={activeTheme}
              data-testid="videoItemDetails"
            >
              <Header />
              <BelowContainer>
                <LeftNavbar />
                {renderResult()}
              </BelowContainer>
            </MainBgContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default VideoItemDetails
