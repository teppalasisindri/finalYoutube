import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import NxtWatchContent from '../../context/nxtWatchContext'
import Header from '../Header'
import LeftNavbar from '../LeftNavbar'
import GamingCard from '../GamingCard'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

import {
  HomeContainer,
  BelowContainer,
  FailureContainer,
  FailureImage,
  Heading,
  Paragraph,
  CustomButton,
  ItemsContainer,
  UnOrderList,
  SearchContainer,
  TrendingTopContainer,
  TrendingHeading,
} from './styledGaming'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {
    videosList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getData()
  }

  onRetry = () => {
    this.getData()
  }

  getData = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})
    const apiUrl = `https://apis.ccbp.in/videos/gaming`
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
      console.log(data)
      const formattedData = data.videos.map(each => ({
        id: each.id,

        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))
      this.setState({
        videosList: formattedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  render() {
    const {videosList, apiStatus} = this.state
    console.log(videosList)

    return (
      <NxtWatchContent.Consumer>
        {value => {
          const {activeTheme} = value

          const onRetry = () => {
            this.getData()
          }

          const renderDataView = () => (
            <ItemsContainer>
              <UnOrderList>
                {videosList.map(each => (
                  <GamingCard key={each.id} details={each} />
                ))}
              </UnOrderList>
            </ItemsContainer>
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
                return renderDataView()
              case apiStatusConstants.failure:
                return renderFailureView()
              case apiStatusConstants.loading:
                return renderLoadingView()
              default:
                return null
            }
          }

          return (
            <HomeContainer activeTheme={activeTheme} data-testid="gaming">
              <Header />
              <BelowContainer>
                <LeftNavbar />
                <SearchContainer>
                  <TrendingTopContainer activeTheme={activeTheme}>
                    <SiYoutubegaming className="icon" />
                    <TrendingHeading activeTheme={activeTheme}>
                      Gaming
                    </TrendingHeading>
                  </TrendingTopContainer>
                  {renderResult()}
                </SearchContainer>
              </BelowContainer>
            </HomeContainer>
          )
        }}
      </NxtWatchContent.Consumer>
    )
  }
}
export default Gaming
