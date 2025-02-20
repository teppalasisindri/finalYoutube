import {Component} from 'react'
import Cookies from 'js-cookie'
import {FaSearch} from 'react-icons/fa'
import {IoMdClose} from 'react-icons/io'
import Popup from 'reactjs-popup'
import Loader from 'react-loader-spinner'
import NxtWatchContent from '../../context/nxtWatchContext'
import Header from '../Header'
import LeftNavbar from '../LeftNavbar'
import CardDetails from '../CardDetails'
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
  Search,
  SearchInput,
  PopCon,
  PopLeft,
  Head,
  Para,
  But,
} from './styledHome'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'IN_PROGRESS',
  zero: 'ZERO',
}

class Home extends Component {
  state = {
    searchInput: '',
    videosList: [],
    apiStatus: apiStatusConstants.initial,
    close: true,
  }

  componentDidMount() {
    this.getData()
  }

  onRetry = () => {
    this.getData()
  }

  onSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  onSearching = () => {
    this.getData()
  }

  onClose = () => {
    this.setState({close: false})
  }

  getData = async () => {
    const {searchInput} = this.state
    this.setState({apiStatus: apiStatusConstants.loading})
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
      const formattedData = data.videos.map(each => ({
        id: each.id,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },
      }))
      if (formattedData.length === 0) {
        this.setState({apiStatus: apiStatusConstants.zero})
      } else {
        this.setState({
          videosList: formattedData,
          apiStatus: apiStatusConstants.success,
        })
      }
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  render() {
    const {videosList, apiStatus, searchInput, close} = this.state

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
                  <CardDetails key={each.id} details={each} />
                ))}
              </UnOrderList>
            </ItemsContainer>
          )

          const renderNoVideos = () => (
            <FailureContainer>
              <FailureImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                alt="no videos"
              />
              <Heading activeTheme={activeTheme}>
                No Search results found
              </Heading>
              <Paragraph activeTheme={activeTheme}>
                Try different key words or move search filter
              </Paragraph>
              <CustomButton onClick={onRetry}>Retry</CustomButton>
            </FailureContainer>
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
              case apiStatusConstants.zero:
                return renderNoVideos()
              default:
                return null
            }
          }

          return (
            <HomeContainer activeTheme={activeTheme} data-testid="home">
              <Header />
              <BelowContainer>
                <LeftNavbar />
                <SearchContainer>
                  {close && (
                    <PopCon data-testid="banner">
                      <PopLeft>
                        <Head
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="website logo"
                        />
                        <Para>
                          Buy Nxt Watch Premium prepaid plans with UPI
                        </Para>
                        <But>GET IT NOW</But>
                      </PopLeft>
                      <PopLeft>
                        <div className="close-div">
                          <button
                            type="button"
                            className="close-button"
                            onClick={this.onClose}
                            data-testid="close"
                          >
                            <IoMdClose className="close-icon" />
                          </button>
                        </div>
                      </PopLeft>
                    </PopCon>
                  )}

                  <Search activeTheme={activeTheme}>
                    <SearchInput
                      type="search"
                      activeTheme={activeTheme}
                      placeholder="Search"
                      onChange={this.onSearch}
                      value={searchInput}
                    />
                    <div className="search-con">
                      <button
                        type="button"
                        className="button"
                        data-testid="searchButton"
                      >
                        <FaSearch
                          className="search-logo"
                          onClick={this.onSearching}
                        />
                      </button>
                    </div>
                  </Search>
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
export default Home
