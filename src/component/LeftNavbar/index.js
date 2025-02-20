import {Link, withRouter} from 'react-router-dom'
import {IoHome, IoBagAddSharp} from 'react-icons/io5'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {CiSaveUp1} from 'react-icons/ci'
import NxtWatchContext from '../../context/nxtWatchContext'

import {
  LeftMainContainer,
  LeftTopCardDiv,
  UnOrderList,
  ListItems,
  ParagraphElement,
  NavBelowContainer,
  NavHeading,
  LogosDiv,
  LogoImage,
  NavParagraph,
} from './styledLeftnavbar'
import './index.css'

const LeftNavbar = props => {
  const {history} = props

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {activeTheme} = value

        return (
          <LeftMainContainer activeTheme={activeTheme}>
            <LeftTopCardDiv>
              <UnOrderList>
                <Link to="/" className="text-decoration">
                  <ListItems key="1">
                    <IoHome />
                    <ParagraphElement activeTheme={activeTheme}>
                      Home
                    </ParagraphElement>
                  </ListItems>
                </Link>
                <Link to="/trending" className="text-decoration">
                  <ListItems key="2">
                    <FaFire />
                    <ParagraphElement activeTheme={activeTheme}>
                      Trending
                    </ParagraphElement>
                  </ListItems>
                </Link>
                <Link to="/gaming" className="text-decoration">
                  <ListItems key="3">
                    <SiYoutubegaming />
                    <ParagraphElement activeTheme={activeTheme}>
                      Gaming
                    </ParagraphElement>
                  </ListItems>
                </Link>
                <Link to="/saved-videos" className="text-decoration">
                  <ListItems key="4">
                    <IoBagAddSharp />
                    <ParagraphElement activeTheme={activeTheme}>
                      Saved videos
                    </ParagraphElement>
                  </ListItems>
                </Link>
              </UnOrderList>
            </LeftTopCardDiv>
            <NavBelowContainer>
              <NavHeading activeTheme={activeTheme}>CONTACT US</NavHeading>
              <LogosDiv>
                <LogoImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <LogoImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <LogoImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </LogosDiv>
              <NavParagraph activeTheme={activeTheme}>
                Enjoy! Now to see your channels and recommendations!
              </NavParagraph>
            </NavBelowContainer>
          </LeftMainContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}
export default withRouter(LeftNavbar)
