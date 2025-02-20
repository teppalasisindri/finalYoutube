import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {MdDarkMode, MdLightMode} from 'react-icons/md'
import {CiLight} from 'react-icons/ci'
import {LuLogOut} from 'react-icons/lu'
import {IoIosMenu} from 'react-icons/io'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import NxtWatchContext from '../../context/nxtWatchContext'

import {
  HeaderBgContainer,
  DivContainers,
  LogoImage,
  HeaderCardImages,
  CustomButton,
  PopContainer,
  CustomIcon,
} from './styledHeader'
import './index.css'

const Header = props => {
  const {history} = props

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {activeTheme, onThemeChange} = value

        const onTheme = () => {
          onThemeChange()
        }

        const onLogout = () => {
          Cookies.remove('jwt_token')
          history.replace('/login')
        }

        return (
          <HeaderBgContainer activeTheme={activeTheme}>
            <DivContainers>
              {activeTheme ? (
                <Link to="/">
                  <LogoImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="website logo"
                  />
                </Link>
              ) : (
                <Link to="/">
                  <LogoImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                    alt="website logo"
                  />
                </Link>
              )}
            </DivContainers>
            <DivContainers>
              {activeTheme ? (
                <button
                  type="button"
                  className="button"
                  data-testid="theme"
                  onClick={onTheme}
                >
                  <MdDarkMode className="theme-icons" />
                </button>
              ) : (
                <button
                  type="button"
                  className="button"
                  data-testid="theme"
                  onClick={onTheme}
                >
                  <MdLightMode className="theme-icons" />
                </button>
              )}
              <HeaderCardImages
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <div className="logout-container">
                <IoIosMenu />
              </div>
              <Popup
                modal
                trigger={
                  <CustomButton type="button" activeTheme={activeTheme}>
                    Logout
                  </CustomButton>
                }
              >
                {close => (
                  <PopContainer activeTheme={activeTheme}>
                    <div>
                      <p>Are you sure, you want to logout</p>
                    </div>
                    <button
                      type="button"
                      className="trigger-button"
                      onClick={() => close()}
                    >
                      Cancel
                    </button>
                    <CustomButton activeTheme={activeTheme} onClick={onLogout}>
                      Confirm
                    </CustomButton>
                  </PopContainer>
                )}
              </Popup>
              <div className="logout-container">
                <Popup
                  modal
                  trigger={
                    <CustomIcon type="button" activeTheme={activeTheme}>
                      <LuLogOut />
                    </CustomIcon>
                  }
                >
                  {close => (
                    <PopContainer activeTheme={activeTheme}>
                      <div>
                        <p>Are you sure you want to Logout?</p>
                      </div>
                      <button
                        type="button"
                        className="trigger-button"
                        onClick={() => close()}
                      >
                        Cancel
                      </button>
                      <CustomButton
                        activeTheme={activeTheme}
                        onClick={onLogout}
                      >
                        Confirm
                      </CustomButton>
                    </PopContainer>
                  )}
                </Popup>
              </div>
            </DivContainers>
          </HeaderBgContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}
export default withRouter(Header)
